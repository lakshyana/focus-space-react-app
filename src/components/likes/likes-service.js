import React from 'react'
import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'
const LIKES_URL = 'http://localhost:4000/users/:uid/likes/:mid'

const api = axios.create({withCredentials: true})

export const userLikesMusic = async (mid) => {
    const response = await api.post(`${USERS_URL}/likes/${mid}`)
    return response.data
}

export const findMusicLikedByUser = async (uid) => {
    const response = await api.get(`${USERS_URL}/${uid}/likes`)
    return response.data
}
