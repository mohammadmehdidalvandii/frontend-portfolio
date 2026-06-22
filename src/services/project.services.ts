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
};

export const useGetProjectById = (id:string) =>{
    return useQuery({
        queryKey:['project', id],
        queryFn:async ()=>{
            const res = await publicApi.get(`/projects/${id}`);
            return res.data?.data;
        }
    })
}