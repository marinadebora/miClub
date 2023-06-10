import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   name:'',
   userName:'',
   email: ''

}
export const userSlice = createSlice({
  name:'user',
  initialState,
  reducer:{
    addUser: (state,action)=>{
      const {name, userName, email} = action.payload
      state.name = name
      state.userName = userName
      state.email = email
    },
    changeEmail:(state,action)=>{
      state.email = action.payload
    }
  }
})
export const { addUser, changeEmail } = userSlice.actions
export default userSlice.reducer

/* import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchWrapper } from '_helpers';

// create slice

const name = 'users';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const userActions = { ...slice.actions, ...extraActions };
export const usersReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        users: {}
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

    return {
        getAll: getAll()
    };    

    function getAll() {
        return createAsyncThunk(
            `${name}/getAll`,
            async () => await fetchWrapper.get(baseUrl)
        );
    }
}

function createExtraReducers() {
    return {
        ...getAll()
    };

    function getAll() {
        var { pending, fulfilled, rejected } = extraActions.getAll;
        return {
            [pending]: (state) => {
                state.users = { loading: true };
            },
            [fulfilled]: (state, action) => {
                state.users = action.payload;
            },
            [rejected]: (state, action) => {
                state.users = { error: action.error };
            }
        };
    }
} */