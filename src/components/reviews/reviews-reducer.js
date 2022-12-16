import React from 'react'
import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsByAuthorThunk, findReviewsByMusicThunk} from "./reviews-thunks";

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: {
        reviews: []
    },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload)
        },
        [findReviewsByMusicThunk().fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findReviewsByAuthorThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        }
    }
})

export default reviewsReducer.reducer
