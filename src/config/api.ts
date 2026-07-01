import axios from 'axios';

export const publicApi = axios.create({
    baseURL:"https://api.web-dalvandi.ir/api",
});

export const privateApi = axios.create({
    baseURL:"https://api.web-dalvandi.ir/api",
})

privateApi.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})