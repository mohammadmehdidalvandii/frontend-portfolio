import {useQuery} from '@tanstack/react-query';
import { publicApi } from '../config/api';

export const useGetAllTimelines = ()=>{
    return useQuery({
        queryKey:['timelines'],
        queryFn: async ()=>{
            const res = await publicApi.get('/timeline');
            return res.data?.data
        }
    })
}