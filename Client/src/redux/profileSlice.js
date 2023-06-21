import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   profile:[],
}
export const profileSlice = createSlice({
  name:'profile',
  initialState,
  reducers:{
    setProfile: (state,action)=>{
      state.profile = action.payload.profile
      console.log(action.payload.profile)
    } 
  }
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer