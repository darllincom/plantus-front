import axios from "axios";

let token = ''

if (typeof window !== 'undefined') {
  token = localStorage.getItem('accessToken') || ''
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { Authorization: 'Bearer '+ token }
})