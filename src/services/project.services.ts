import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import { privateApi, publicApi } from '../config/api';


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
};

export const useCreatedProject = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (values:FormData)=>{
            const res = await privateApi.post('/projects',values,{
                headers:{'Content-Type':'multipart/form-data'},
            })
            return res.data?.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['projects']})
        }
    })
}
