import {QueryClient , QueryClientProvider} from '@tanstack/react-query';
import {useState} from 'react';

export function QueryProvider({children}:{children:React.ReactNode}):JSX.Element{
    const [queryClient] = useState(()=>new QueryClient({
        defaultOptions:{
            queries:{
                staleTime:0,
                refetchOnWindowFocus:true,
                refetchOnMount:true,
                retry:1
            }
        }
    }));
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}