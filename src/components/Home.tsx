import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { FormInput } from '../assets/ReduxSlices/formSlice'//type inference

import Forms from './Forms'

interface RootProp{
    formInputs: FormInput,
}

export default function Home() {

    const {name, email, gender} = useSelector((state:RootProp)=>state.formInputs) 


  return (
    <div>
        <div>
           <h2>welcome navigate here</h2>
           <Link to='/form'>FormPage</Link>
        </div>

        <hr />

        <div>
           <Forms />
        </div>

        <hr />

        <div>

            <p>name</p>: <label>{name === ''? '' : name}</label>

            <br />
            <br />

            <p>email</p>: <label>{email === ''? '' : email}</label>
            
            <br />
            <br />
           
            <p>gender</p>: <label>{gender === ''? '' : gender}</label>

        </div>
    </div>
  )
}
