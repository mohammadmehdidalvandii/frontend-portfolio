import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import { privateApi, publicApi } from '../config/api';
import { TimelineDTO } from '../types/timelines';

export const useGetAllTimelines = ()=>{
    return useQuery({
        queryKey:['timelines'],
        queryFn: async ()=>{
            const res = await publicApi.get('/timeline');
            return res.data?.data
        }
    })
};

export const useCreateTimelines = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (values:TimelineDTO)=>{
            const res  =  await privateApi.post('/timeline', values ,{
                headers:{'Content-Type':'application/json'}
            });

            return res.data?.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['timelines']})
        }
    })
}