import {useMutation} from '@tanstack/react-query';
import { publicApi } from '../config/api';
import { MessageDTO } from '../types/message';


export const useSendMessage = ()=>{
    return useMutation({
        mutationFn: async (values:MessageDTO)=>{
            const res = await publicApi.post('/message', values ,{
                headers:{'Content-Type':'application/json'}
            });
            return res.data;
        }
    })
}