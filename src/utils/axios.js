import axios from "axios"
export const http = axios.create({
    baseURL:'http://localhost:8080/api/v1',
    headers: {
        "Content-Type": "application/json"
    }
});

export const getHeaders = () => {
    const token = localStorage.getItem('token')
    const headers  = token ? {
        'Authorization':'Bearer ' + token,
    } : {}
    console.log(headers)
    return headers
}