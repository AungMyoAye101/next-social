
import axios from "axios"
const base = process.env.NEXT_PUBLIC_BASE_URL
export const axiosInstance = axios.create({
    baseURL: base,
    withCredentials: true
})