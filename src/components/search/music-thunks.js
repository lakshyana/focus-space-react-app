import React from 'react'
import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMusicById, findMusicBySearchTerm} from "./music-service";

export const findMusicBySearchTermThunk = createAsyncThunk(
    'findMusicBySearchTerm',
    (term) => findMusicBySearchTerm(term)
)
export const findMusicByIdThunk = createAsyncThunk(
    'findMusicById',
    (id) => findMusicById(id)
)
