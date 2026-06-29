import * as Yup from 'yup';

export const validationTimelinesSchema = Yup.object({
year:Yup.string().required('Year is required'),
role:Yup.string().required('Role is required'),
company:Yup.string().required('Company is required'),
detail:Yup.string().required('Details is required'),
achievement:Yup.string().required('Achievement is required'),
isCurrent:Yup.boolean(),
})