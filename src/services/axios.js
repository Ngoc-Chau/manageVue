import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_BASE_DOMAIN;
// Request interceptor
axios.interceptors.request.use(request => {
  // @ts-ignore
  request.headers.common["Access-Control-Allow-Origin"] = "*";
  // @ts-ignore
  request.headers.common["Access-Control-Allow-Methods"] = "GET";

  return request;
});

// Response interceptor
axios.interceptors.response.use(
  response => {
    return response;
  },
);

export default axios;