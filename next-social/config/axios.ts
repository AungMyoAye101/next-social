
import axios from "axios"
export const base = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
    baseURL: base,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
});

//Check token and set bearer token to headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = "aaaaa";
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
        const status = error.response.status;
        console.log(status);

        if (status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const { data } = await axiosInstance.post('/auth/refresh')
                const newAccessToken = data.token;

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest)
            } catch (error) {
                console.log(error)
                return Promise.reject(error)
            }


        }
    }
)


export default axiosInstance;