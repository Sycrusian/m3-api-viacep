import axios from "axios";

export const viacep = axios.create({
  baseURL: "https://viacep.com.br/ws",
  timeout: 5000
});