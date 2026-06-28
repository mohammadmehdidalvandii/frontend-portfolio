import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { privateApi, publicApi } from '../config/api';
import { CertificateDTO } from '../types/certificate';

export const useGetAllCertificate = () => {
    return useQuery({
        queryKey: ['certificates'],
        queryFn: async () => {
            const res = await publicApi.get('/certificate');
            return res.data?.data
        }
    })
};

export const useCreateCertificate = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (values: FormData) => {
            const res = await privateApi.post('/certificate', values, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            return res.data?.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['certificates'] })
        }
    })
};

export const useUpdateCertificate = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, values }: { id: string, values: Partial<CertificateDTO> }) => {
            const res = await privateApi.patch(`/certificate/${id}`, values, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return res.data?.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['certificates'] })
        }
    })
}