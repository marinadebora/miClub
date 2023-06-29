import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Slice/userSlice'
import profileSlice from '../Slice/profileSlice'
import activitySlice from '../Slice/acticitySlice'

export const store= configureStore({
  reducer:{
    user:userSlice,
    profile:profileSlice,
    activity:activitySlice
  }
})
/* import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth.slice';
import { usersReducer } from './users.slice';

export * from './auth.slice';
export * from './users.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer
    },
}); */