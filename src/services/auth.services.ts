import {useMutation}  from '@tanstack/react-query';
import { privateApi } from '../config/api';
import { LoginDTO } from '../types/auth';

export const useLogin = ()=>{
    return useMutation({
        mutationFn: async (values:LoginDTO)=>{
            const res  = await privateApi.post('/user/login' , values ,{
                headers:{'Content-Type':'application/json'},
            });
            return res.data.data
        }
    })
}