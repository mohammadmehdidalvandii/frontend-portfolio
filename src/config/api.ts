import { getToken } from '@utils/auth';
import axios from 'axios';

export const publicApi = axios.create({
    baseURL:"https://protfolio-back.chbkn.run/api",
});

export const privateApi = axios.create({
    baseURL:"https://protfolio-back.chbkn.run/api",
})

privateApi.interceptors.request.use((config)=>{
    const token = getToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})