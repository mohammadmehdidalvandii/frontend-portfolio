import { getToken } from '@utils/auth';
import axios from 'axios';

export const publicApi = axios.create({
    baseURL:"https://protfolio-back.chbkn.dev/api",
});

export const privateApi = axios.create({
    baseURL:"https://protfolio-back.chbkn.dev/api",
})

privateApi.interceptors.request.use((config:any)=>{
    const token = getToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})