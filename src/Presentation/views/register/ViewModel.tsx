import React, {useState} from 'react'
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';




export const RegisterViewModel = () => {
   

  const [errorMessage,setErrorMessage] = useState('')
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const onChange=(property: string, value: any)=>{
    setValues({...values, [property]: value})
  }

  const register = async() => {
    if (isValidForm()){
      const response = await RegisterAuthUseCase(values);
      console.log('RESULT:' + JSON.stringify(response));
    }
  
   
    
  }

  const isValidForm = () : boolean =>{

    if(values.name === ''){
      setErrorMessage('Ingresa tu nombre')
      return false;
    }

    if(values.lastname === ''){
      setErrorMessage('Ingresa tu apellido')
      return false;
    }

    if(values.email === ''){
      setErrorMessage('Ingresa tu correo electronico')
      return false;
    }

    if(values.phone === ''){
      setErrorMessage('Ingresa tu numero de telefono')
      return false;
    }

    if(values.password === ''){
      setErrorMessage('Ingresa tu contraseña')
      return false;
    }

    if(values.confirmPassword === ''){
      setErrorMessage('Ingresa nuevamente tu contraseña')
      return false;
    }
    if (values.password !== values.confirmPassword){
      setErrorMessage('Las contraseña no coinciden')
      return false;
    }

    return true; 

  }

  return{
     ...values, 
     onChange,
     register,
     errorMessage
  }
}

export default RegisterViewModel;
