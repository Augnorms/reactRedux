import * as Yup from 'yup'


interface FormData{
    name:string,
    email:string,
    gender:string
}

const initialValues: FormData = {
    name:'',
    email:'',
    gender:''
}

const validationSchema: Yup.ObjectSchema<FormData> = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    gender: Yup.string().required('Required')
  });

  const onSubmit = (_values: FormData, { resetForm }: { resetForm: () => void }) => {
   
    resetForm()
}

const formikConfig = {initialValues, validationSchema, onSubmit}

export default formikConfig
