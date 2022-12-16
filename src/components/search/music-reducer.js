import React from 'react'
import {createSlice} from "@reduxjs/toolkit";
import {findMusicByIdThunk, findMusicBySearchTermThunk} from "./music-thunks";

const initialState = {
    music: [],
    loading: true,
    selectedVideo: null ,
    details: {}
}

const musicReducer = createSlice({
    name: 'music',
    initialState: initialState,
    extraReducers: {
        [findMusicBySearchTermThunk.fulfilled]: (state, action) => {
            state.loading = false // turn off loading flag since we have the data
            state.music = action.payload
            state.selectedVideo = state.music[0]
            console.log("music thunk fulfilled: ", action.payload)
            console.log("loading from thunk: ", state.loading)
            console.log("state music 0 selected: ", state.selectedVideo)
        },
        [findMusicByIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
            // state.selectedVideo = state.details[0]

            // body.items.filter(item => item.type === 'video');
        }
    }
})

export default musicReducer.reducer
