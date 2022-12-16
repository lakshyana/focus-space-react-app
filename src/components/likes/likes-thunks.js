import React from 'react'
import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMusicLikedByUser, userLikesMusic} from "./likes-service";

export const userLikesMusicThunk = createAsyncThunk(
    'userLikesMusic',
    async (like) => {
        return await userLikesMusic(like.mid)
    }
)
export const findMusicLikedByUserThunk = createAsyncThunk(
    'findMusicLikedByUser',
    async (uid) => await findMusicLikedByUser(uid)
)
