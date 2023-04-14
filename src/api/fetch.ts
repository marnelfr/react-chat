import { config } from "../constants/config";

const METHODS = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

class ApiClient {
  config;
  token: string | null;
  refreshToken: string | null;
  expirationDate: Date;

  constructor() {
    this.config = config;
    this.token = localStorage.getItem("token");

    const expiresAt = localStorage.getItem("expiresAt");
    this.expirationDate = new Date(Number(expiresAt) * 1000);

    this.refreshToken = localStorage.getItem("refreshToken");
  }

  updateAuth() {
    this.token = localStorage.getItem("token");
    const expiresAt = localStorage.getItem("expiresAt");
    this.expirationDate = new Date(Number(expiresAt) * 1000);
    this.refreshToken = localStorage.getItem("refreshToken");
  }

  async tokenRefresher() {
    try {
      const data = await this.post(
        "token/refresh",
        { refresh_token: this.refreshToken },
        false
      );

      console.log("in tokenRefresher", data);

      this.token = data.token;
      localStorage.setItem("token", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data.user));
    } catch (e) {
      this.clearAuthInfo();
      window.location.href = "/login";
    }
  }

  clearAuthInfo = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userInfo");
  };

  post = async (
    url: string,
    data?: any,
    retryOn401: boolean = false
  ): Promise<any> =>
    await this.request(url, METHODS.POST, false, data, retryOn401);

  authPost = async (url: string, data?: any): Promise<any> =>
    await this.request(url, METHODS.POST, true, data);

  get = async (url: string, data?: any): Promise<any> =>
    await this.request(url, METHODS.GET, false, data);

  authGet = async (url: string, data?: any): Promise<any> =>
    await this.request(url, METHODS.GET, true, data);

  authPut = async (url: string, data?: any): Promise<any> =>
    await this.request(url, METHODS.PUT, true, data);

  async request(
    url: string,
    method: string,
    authRequest: boolean,
    data?: any,
    retryOn401: boolean = true
  ): Promise<any> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    if (authRequest) {
      if (!localStorage.getItem("token")) {
        window.location.href = "/";
      }
      headers.Authorization = "Bearer " + this.token;
    }

    const init: RequestInit = {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
    };
    if (
      url === "login" ||
      url === "token/invalidate" ||
      url === "token/refresh"
    ) {
      init.credentials = "include";
    }
    const response = await fetch(this.config.BACKEND_URL + url, init);
    if (
      response.status === 401 &&
      response.statusText === "Unauthorized" &&
      retryOn401
    ) {
      await this.tokenRefresher();
      return await this.request(url, method, authRequest, data);
    }

    if (!response.ok) {
      throw new Response("Error while making request", { status: 500 });
    }

    return await response.json();
  }
}

const apiClient = new ApiClient();

export default apiClient;
