import axios from "axios";

export const api = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return axiosInstance
}
