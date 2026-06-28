import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import { privateApi, publicApi } from '../config/api';

export const useGetAllCertificate = ()=>{
    return useQuery({
        queryKey:['certificates'],
        queryFn: async ()=>{
            const res =  await publicApi.get('/certificate');
            return res.data?.data
        }
    })
};

export const useCreateCertificate = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (values:FormData)=>{
            const res = await privateApi.post('/certificate',values ,{
                headers:{'Content-Type':'multipart/form-data'},
            })
            return res.data?.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['certificates']})
        }
    })
}