import axios from "axios";
import { notification } from "antd";
import Cookie from "js-cookie";
import { BASE_URL } from "../config";

const handleNotification = (type, title, text) => {
  notification.config({
    placement: "bottomRight",
  });
  notification[type]({
    message: title,
    description: text,
  });
};

const httpRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

httpRequest.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpRequest.interceptors.request.use((config) => {
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  return config;
});

httpRequest.interceptors.response.use(
  function (response) {
    if (response.config.method !== "get") {
      if (response.data.message) {
        handleNotification("success", "Success", response.data.message);
      }
    }
    return response;
  },
  function (error) {
    if (!error.response) {
      handleNotification("error", "Error", "Something when wrong");
    }
    if (error?.response?.data?.message) {
      handleNotification("error", "Error", error.response.data.message);
    }
    // console.log(error?.response?.status, "err");
    if (error?.response?.status === 401) {
      Cookie.remove("token");
      Cookie.remove("user");
      window.location.href = "/login";
    }

    if (error?.response?.status === 403) {
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default httpRequest;
