
import axios from "axios"
import Cookies from "js-cookie"
export const base = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
    baseURL: base,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
});
const axiosRefresh = axios.create({
    baseURL: base,
    withCredentials: true
});


axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("access_token");
        config.headers.Authorization = `Bearer ${token}`
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        console.log(originalRequest, "Original request");
        const status = error.response?.status;
        console.log("status", status);
        if (originalRequest?.url?.includes("/auth/refresh")) {
            return Promise.reject(error);
        }

        if (status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const res = await axiosRefresh.post('/api/v1/auth/refresh')
                console.log(res)
                const newAccessToken = res.data.result.token;
                if (newAccessToken) {

                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                }
                return axiosInstance(originalRequest)
            } catch (error) {
                console.log("Refresh token ", error)
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    })


export default axiosInstance;