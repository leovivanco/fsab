import axios from "axios";

const axiosInstance = axios.create({
  timeout: 10000,
  //headers: { "X-Custom-Header": "foobar" },
  headers: {
    Accept: "application/json",
  },
});

export default axiosInstance;
