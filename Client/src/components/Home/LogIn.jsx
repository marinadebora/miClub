import { useEffect, useState } from 'react';
import {useDispatch}from 'react-redux'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { InputGroup, Form, FormControl, FormCheck, FormLabel} from 'react-bootstrap';
import { postUser } from '../../redux/thunks';
const LogIn = () =>
{
  const dispatch = useDispatch()  
  const [eye, setEye] =useState(true)
  const [imgEye, setImgEye] = useState("")
  const [form, setForm] = useState({
    firsName:"",
    LastName:"",
    email:"",
    password:"",
    isTeacher:""
    
  })
  useEffect(() => {
    if(eye){
      setImgEye(FaEye)
    }else{
      setImgEye(FaEyeSlash)
    }
    
  }, [eye])
  const handleClick = () =>
  {
    setEye(!eye)
    
  }
  const handleOnChange = (e) => {
  
    setForm({
      ...form,
      isTeacher:e.target.checked
    });
   
  };
  
  const handleChange =(event)=>{
event.preventDefault()
setForm({
  ...form,
  [event.target.name]:event.target.value,
})
  }
  const handleSumit =(event)=>{
    event.preventDefault()
    dispatch(postUser(form))
    setForm({
      firsName:"",
    LastName:"",
    email:"",
    password:"",
    isTeacher:""
    })
  }
  return (
/*  firsName: { type: String, require: true, lowercase: true },
    LastName: { type: String, require: true, lowercase: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isTeacher: { type: Boolean, default: false },
    profilePhoto*/
    <>
      <Form className="col-md-5 mx-auto " onSubmit={handleSumit}>
      
        <FormControl 
        name='firsName'
        value={form.firsName} 
        size="text" type="text" 
        placeholder="Nombre" 
        onChange={handleChange}/>
        <br />
        <FormControl 
        name="LastName"
        value={form.LastName} 
        size="text" 
        type="text" 
        placeholder="Apellido"
        onChange={handleChange} />
        <br />
        <FormControl
        type="text" 
        name='email'
        value={form.email}
        placeholder="nombre@ejemplo.com"
        onChange={handleChange} />
        <br />
        <InputGroup className="mb-3">
          {
            eye?<FormControl 
            name='password'
            value={form.password} 
            size="text" 
            type="text" 
            id="inputPassword"
            onChange={handleChange} 
            aria-describedby="passwordHelpBlock"
            placeholder="Clave-1234" />:
            <FormControl  
            name='password' 
            value={form.password}
            size="text" 
            type="password"
            id="inputPassword" 
            onChange={handleChange} 
            aria-describedby="passwordHelpBlock" 
            placeholder="........"/>
          }
        
            <Button variant="link" onClick={handleClick}>{imgEye}</Button>
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
            <FormCheck 
            name='isTeacher'
            value={form.isTeacher}
            onChange={handleOnChange}  
            type="checkbox" 
            aria-label="radio 1"  />
            <FormLabel>  Es Profesor  </FormLabel>
            </InputGroup>
           
        <Button type='submit'>Enviar</Button>    
      </Form>
    </>

  )
}

export default LogIn
