import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
export const oapi = axios.create({
  baseURL: "/api",
});
oapi.interceptors.request.use(
    function (config) {
      if (Cookies.get("getimgauth")) {
        config.headers["Authorization"] = `Bearer ${Cookies.get("getimgauth")}`;
      }
      return config;
    },
    function (error) {
      console.log("Request error:", error);
      return Promise.reject(error);
    }
  );
export function handleApiError(error: AxiosError) {
    const status = error?.response ? error?.response?.status : 500;
    let message = error?.response?.data
      ? error?.response?.data
      : error?.stack ?? "Unknown Error";
  
    return { status, message };
  }