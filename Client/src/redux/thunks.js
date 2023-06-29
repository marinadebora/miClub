import { setProfile } from '../Slice/profileSlice'
import { serverApi } from './serverApi'
import {setUser} from '../Slice/userSlice'
import { setActivity } from '../Slice/acticitySlice'


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
export const getActivity = ()=>{
  return async(dispatch)=>{
    const response = (await serverApi(`/activity`)).data
    dispatch(setActivity(response))    
  }
}