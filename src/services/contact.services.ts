import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import { privateApi, publicApi } from '../config/api';
import { MessageDTO } from '../types/message';


export const useGetAllMessage = ()=>{
    return useQuery({
        queryKey:['messages'],
        queryFn: async ()=>{
            const res = await privateApi.get('/message');
            return res.data?.data
        }
    })
}

export const useSendMessage = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (values:MessageDTO)=>{
            const res = await publicApi.post('/message', values ,{
                headers:{'Content-Type':'application/json'}
            });
            return res.data;
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['messages']});
        }
    })
};


