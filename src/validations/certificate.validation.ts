import * as Yup from 'yup';

export const validationCertificateSchema = Yup.object({
    title:Yup.string().required('Title is required'),
    issuer:Yup.string().required('Issuer is required'),
    year:Yup.number().required('Year is required'),
    credentialId:Yup.string().required('Credential ID is required'),
    image:Yup.mixed().required('Image is required'),
    verificationLink:Yup.string().required('Verification Link is required'),
})