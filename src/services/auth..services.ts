import {useMutation}  from '@tanstack/react-query';
import { privateApi } from '../config/api';
import { LoginDTO } from '../types/auth';

export const Login = ()=>{
    return useMutation({
        mutationFn: async (values:LoginDTO)=>{
            const res  = await privateApi.post('/login' , values ,{
                headers:{'Content-Type':'application/json'},
            });
            return res.data
        }
    })
}