import axios from "axios";

const API_SERVER_URL = import.meta.env.VITE_API_SERVER_URL;

export const serverInstance = axios.create({
  baseURL: API_SERVER_URL,
});
