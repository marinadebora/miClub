import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import profileSlice from './profileSlice'

export const store= configureStore({
  reducer:{
    user:userReducer,
    profile:profileSlice
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