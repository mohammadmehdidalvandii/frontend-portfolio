import {useQuery} from '@tanstack/react-query';
import { publicApi } from '../config/api';

export const useGetAllCertificate = ()=>{
    return useQuery({
        queryKey:['certificates'],
        queryFn: async ()=>{
            const res =  await publicApi.get('/certificate');
            return res.data?.data
        }
    })
}