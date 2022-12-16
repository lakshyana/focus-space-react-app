import React from 'react'
import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk, findUserByIdThunk, loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk
}  from "./users-thunks";


const initialState = {
    users: [],
    loading: false,
    currentUser: null,
    publicProfile: null
}


const usersReducer = createSlice({
    name: 'users',
    initialState: initialState,

    extraReducers: {

        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
        },

        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },

        [updateUserThunk.fulfilled]: (state, action) => {
            state.loading = false // clear loading flag
            const idx = state.users.findIndex(t => t._id === action.payload._id)
            console.log("user update thunk fulfilled")
            console.log("id " + idx)
            console.log('current users',state.users)
            console.log(action.payload)
            state.currentUser = action.payload
            // state.users.map(
            //     user => user._id === action.user._id ?
            //         action.user : user)
        },

        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.users.push(action.payload)
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        }
    }
})

export default usersReducer.reducer


//     [updateUserThunk.fulfilled]: (state, { payload }) => { // server response successful
//     const userNdx = state.users.findIndex(u => u._id === payload._id)
//     state.users[userNdx] = { // merge new user data into existing user
//         ...state.users[userNdx],
//         ...payload
//     }
// },
//
