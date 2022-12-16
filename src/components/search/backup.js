import React from 'react'
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMusicByIdThunk} from "./music-thunks";
import {createReviewThunk, findReviewsByMusicThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";

const musicDetails = () => {
    const {id} = useParams()
    const {details} = useSelector((state) => state.music)
    const {currentUser} = useSelector((state) => state.users)

    const [review, setReview] = useState('')
    const {reviews} = useSelector((state) => state.reviews)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMusicByIdThunk(id))
        dispatch(findReviewsByMusicThunk(id))
    },[])

    const handlePostReviewBtn = () => {
        const id = id || "jfKfPfyJRdk";
        dispatch(createReviewThunk({
            review, id
        }))
    }
    return(
        <>
            <h1>{details.Title}</h1>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">Title: {details.snippet.title}</li>
                        <li className="list-group-item">Description: {details.snippet.description}</li>
                    </ul>
                </div>
                <div className="col">
                    <img src={details}/>
                </div>
            </div>
            {
                currentUser &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                    <button onClick={handlePostReviewBtn}>Post Review</button>
                </div>
            }
            <ul className="list-group">
                {
                    reviews.map((review) =>
                        <li className="list-group-item">
                            {review.review}
                            <Link to={`/profile/${review.author._id}`} className="float-end">
                                {review.author.username}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <pre>
                {JSON.stringify(details, null, 2)}
            </pre>
        </>
    )
}
export default musicDetails
