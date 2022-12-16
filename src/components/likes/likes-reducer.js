import React from 'react'
import {createSlice} from "@reduxjs/toolkit";
import {findMusicLikedByUserThunk, userLikesMusicThunk} from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}

export const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesMusicThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload)
        },
        [findMusicLikedByUserThunk.fulfilled]: (state, {payload}) => {
            state.likes = payload
        },
        [findMusicLikedByUserThunk.rejected]: (state, {payload}) => {
            state.likes = []
        }
    }
})
