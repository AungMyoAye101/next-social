import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4444',
    withCredentials: true
})
const axiosRefresh = axios.create({
    baseURL: 'http://localhost:4444',
    withCredentials: true
})

let accessToken: any = null;

export const setToken = (token: string) => {
    accessToken = token;

}
console.log(accessToken)

axiosInstance.interceptors.request.use(
    (config) => {
        console.log(accessToken)
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config;
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        console.log(originalRequest)
        const status = originalRequest.status
        console.log("status", status)
        if (status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const res = await axiosRefresh.post('/api/v1/auth/refresh')
                console.log(res.data)
                setToken(res.data.result.token)
                originalRequest.headers.Authorization = `Bearer ${res.data.result.token}`
                return axiosInstance(originalRequest)
            } catch (error) {
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance;