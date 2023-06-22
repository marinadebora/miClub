import { setProfile } from './profileSlice'
import { serverApi } from './serverApi'
import {setUser} from './userSlice'


export const getUsers =()=>{
  return async(dispatch)=>{
    const response =(await serverApi('/user')).data
    dispatch(setUser(response))
  }
}

export const getProfileId = (id)=>{
  return async(dispatch)=>{
    const response = (await serverApi(`/profile/${id}`)).data
    /* console.log(response) */
    dispatch(setProfile(response))    
  }
}