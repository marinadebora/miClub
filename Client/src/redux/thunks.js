import { setProfile } from './profileSlice'
import { serverApi } from './serverApi'
import {setUser} from './userSlice'


export const getUsers =()=>{
  return async(dispatch)=>{
    const response =await serverApi('/user')
    dispatch(setUser({user:response.data}))
  }
}

export const getProfileId = (_id)=>{
  return async(dispatch)=>{
    const response = await serverApi(`/profile/${_id}`)
    console.log(response)
    dispatch(setProfile({profile:response.data}))    
  }
}