
import axios from "axios"
export const base = process.env.NEXT_PUBLIC_BASE_URL
export const axiosInstance = axios.create({
    baseURL: base,
    withCredentials: true
})