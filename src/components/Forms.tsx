/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik"
import formikConfig from "../importants/useFormikYupOne"
import {setName, setEmail, setGender} from '../assets/ReduxSlices/formSlice'
import {useDispatch, useSelector} from 'react-redux'






export default function Forms() {  
  
 const formik = useFormik(formikConfig)

 const dispatch = useDispatch()

 const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
  
    if (name === 'name') {
      dispatch(setName(value));
      formik.handleChange(e); 
    } else if (name === 'email') {
      dispatch(setEmail(value));
      formik.handleChange(e); 
    } else if (name === 'gender') {
      dispatch(setGender(value));
      formik.handleChange(e); 
    }
  };
  
 const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const data = {
        name: formik.values.name,
        email: formik.values.email,
        gender: formik.values.gender
    }

    console.log(data)

  };

  const data = useSelector((state:any)=>state.fetch.data)
  const loading = useSelector((state:any)=>state.fetch.isLoading)
  
  return (
    <div>
     
        <form>

            <label>Name:</label>
            <input 
              type='text' 
              name='name' 
              placeholder='name here ..'
              onChange={handleChangeValues}
              value={formik.values.name}
              />

            <br />
            <br />

            <label>email:</label>
            <input 
              type='email' 
              name='email' 
              placeholder='name here ..'
              value={formik.values.email}
              onChange={handleChangeValues}
              />

            <br />
            <br />

            <label>gender:</label>
            <input 
              type='text' 
              name='gender' 
              placeholder='name here ..'
              value={formik.values.gender}
              onChange={handleChangeValues}
              />

            <br />
            <br />

            <button  onClick={handleSubmit}>submit</button>

        </form>

        <hr />
         
        {loading ? (
                <p>Loading...</p>
            ) : (
                data.map((item: any) => (
                    <div key={item.alpha2Code}>
                        <h3>{item.name}</h3>
                        <p>{item.capital}</p>
                    </div>
                ))
            )}

    </div>
  )
}
