import {QueryClient , QueryClientProvider} from '@tanstack/react-query';
import {useState} from 'react';

export function QueryProvider({children}:{children:React.ReactNode}):JSX.Element{
    const [queryClient] = useState(()=>new QueryClient({
        defaultOptions:{
            queries:{
                staleTime: 5 * 60 * 1000, // 5min
                gcTime: 10 * 60 * 1000,
                retry:1,
                refetchOnWindowFocus:false,
                refetchOnMount:true,
                refetchOnReconnect:true,
            },
            mutations:{
                retry:1
            }
        }
    }));
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}