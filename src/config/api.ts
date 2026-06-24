import axios from 'axios';

export const publicApi = axios.create({
    baseURL:"http://localhost:3000/api",
});

const token = localStorage.getItem('token')
export const privateApi = axios.create({
    baseURL:"http://localhost:3000/api",
    headers:{
        Authorization:`Bearer ${token}`
    }
})

