import axios from "axios";
import { config } from "../constants/config";

class ApiClient {
  axios;
  private;

  constructor() {
    this.axios = axios.create({
      baseURL: config.BACKEND_URL,
    });
    this.private = axios.create({
      baseURL: config.BACKEND_URL,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
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
