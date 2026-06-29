import { AxiosError } from "axios";

type ApiErrorBody ={
    message?:string,
    status?:string
};

export function getApiErrorMessage(error:unknown , fallbacck = 'Something went wrong'):string{
    if(error instanceof AxiosError){
        const data = error.response?.data as ApiErrorBody | string | undefined;
        if(typeof data === 'string') return data;
        if(data?.message) return data.message;
    }

    if(error instanceof Error && error.message){
        return error.message
    }

    return fallbacck
}