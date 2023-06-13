import { serverApi } from './serverApi'
import {setUser/* , changeEmail */} from './userSlice'
//import axios from 'axios'
export const getUsers =()=>{
  return async(dispatch)=>{
    const response =await serverApi('/user')
   
    console.log(response.data)
    dispatch(setUser({user:response.data}))
  }
}