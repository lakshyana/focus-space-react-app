import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";

import {createReviewThunk, findReviewsByMusicThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faHeart} from "@fortawesome/free-solid-svg-icons";
import {findMusicByIdThunk} from "./music-thunks";
import {userLikesMusicThunk} from "../likes/likes-thunks";

const MusicItem = (uid, mid) => {
    // const {currentUser} = useSelector((state) => state.users)
    // const {pathname} = useLocation()
    // const parts = pathname.split('/')
    // const {id} = parts[1]
    const dispatch = useDispatch()
    const navigate = useNavigate();

    // console.log("id", pathname)

    // const {details, selectedVideo} = useSelector((state) => state.music)

    const URL = `https://youtube.com/embed/${mid}`;

    const handleVideoLike = (video) => {
        {
            uid ? dispatch(userLikesMusicThunk(
                {
                    uid: uid, mid: mid,
                }

            )) : navigate('/login')
        }
    }

    return (
        <div className={"col-xxl-5 col-xl-10 col-m-10 col-10 mx-auto p-5 d-flex justify-content-center"}>
            <ul className="ms-5 d-flex flex-column justify-content-center list-group">
                <li className="list-group-item">
                    <iframe src={URL}  title={selectedVideo.snippet.title} className={"p-1 bg-white border rounded img-fluid w-100"}/>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-start">
                    <div className={"flex-column justify-content-center"}>
                        <h3 className="text-lg font-medium text-gray-900">{selectedVideo.snippet.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{selectedVideo.snippet.description} </p>
                    </div>
                    <div> <FontAwesomeIcon icon={faHeart} className={"fs-5 text-danger"} /></div>
                </li>

            </ul>


        </div>
    )

}
export default MusicItem;
