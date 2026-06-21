import {toast} from 'sonner';

export const showSuccess = (message:string)=>{
    toast.success(message,{
        duration:3000,
        style:{
            background:'#050505',
            color:'#15803d',
            fontSize:'1rem',
            borderColor:'#15803d'
        }
    })
};

export const showError = (message:string)=>{
    toast.error(message,{
        style:{
            background:'#050505',
            color:'#ef4444',
            fontSize:'1rem',
            borderColor:'#ef4444'
        }
    })
}