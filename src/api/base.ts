import axios from "axios";

const token = localStorage.getItem('accessToken')

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { Authorization: `Bearer ${JSON.parse(token!)}` }
})