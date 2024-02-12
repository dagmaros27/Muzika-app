import axios from "axios";

const instance = new axios.create({
  baseURL: "http://localhost:3000/",
});

export default instance;
