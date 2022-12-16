import axios from "axios";
import React from 'react';

const REVIEW_API = 'http://localhost:4000/reviews'
const MUSIC_REVIEWS_API = 'http://localhost:4000/'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/users'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    return response.data
}

export const findReviewsByMusic = async (id) => {
    const response = await api.get(`${MUSIC_REVIEWS_API}/${id}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}
