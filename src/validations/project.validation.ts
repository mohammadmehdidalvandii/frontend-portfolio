import * as Yup from 'yup';

export const validationProjectSchema = Yup.object({
    name:Yup.string().required('Name is required'),
    title:Yup.string().required('Title is required'),
    stacks:Yup.string().required('Stacks are required'),
    image:Yup.mixed().required('Image is required'),
    demoLink:Yup.string().url('Invalid URL').required('DemoLink is required'),
    githubLink:Yup.string().url('Invalid URL').required('Github link is required'),
    year:Yup.number().required('Year is required'),
    role:Yup.string().required('Role is required'),
    features:Yup.string().required('Features is required'),
    shortDescription:Yup.string().required('Short description is required'),
    longDescription:Yup.string().required('Long description is required'),
})