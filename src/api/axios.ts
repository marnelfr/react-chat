import axios from "axios";

class ApiClient {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:8080/api/",
    });
  }

  post = async (url: string, data: Object) => {
    return await this.axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  };
}

const apiClient = new ApiClient();

export default apiClient;
