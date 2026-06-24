import swal  from 'sweetalert2';

export const showConfirm = async (message:string='This action cannot be undone')=>{
    return swal.fire({
        title:'Are you sure ?',
        text:message,
        showCancelButton:true,
        confirmButtonText:'// confirm',
        cancelButtonText:'// cancel',
        customClass:{
            popup:'swal-popup',
            title:'swal-title',
            confirmButton:'swal-confirm',
            cancelButton:'swal-cancel',
        }
    })
}