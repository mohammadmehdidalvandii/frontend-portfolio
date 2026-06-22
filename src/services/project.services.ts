import {useQuery} from '@tanstack/react-query';
import { publicApi } from '../config/api';

export const useGetAllProject = ()=>{
    return useQuery({
        queryKey:['projects'],
        queryFn:async ()=>{
        const res =  await publicApi.get('/projects');
        return res.data?.data
    }
    })
}