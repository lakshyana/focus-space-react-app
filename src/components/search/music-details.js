import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
// import Youtube from 'react-youtube';
import {useNavigate} from "react-router-dom";

import {createReviewThunk, findReviewsByMusicThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import {useLocation, useParams} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faHeart} from "@fortawesome/free-solid-svg-icons";
import {findMusicByIdThunk} from "./music-thunks";
import {userLikesMusicThunk} from "../likes/likes-thunks";
import {Reviews} from "@mui/icons-material";

const MusicDetails = () => {
    const {id} = useParams()
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation()

    const [review, setReview] = useState('')
    const {reviews} = useSelector((state) => state.reviews)


    const parts = pathname.split('/')
    const mid = parts[1]
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(findMusicByIdThunk(id))
        dispatch(findReviewsByMusicThunk(id))
    },[])

    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            id
        }))
    }


    console.log("id", pathname)

    const {details, selectedVideo} = useSelector((state) => state.music)
    const URL = `https://youtube.com/embed/${mid}`;
    const videoId =  mid || selectedVideo.id.videoId;


    const handleVideoLike = (video) => {
        {
            currentUser ? dispatch(userLikesMusicThunk(
                {
                    uid: currentUser._id, mid: video.id.videoId,
                }

            )) : navigate('/login')
        }
    }

    return (
        <div className={"col-xxl-8 col-xl-10 col-m-10 col-10 mx-auto p-5 d-flex justify-content-center"}>
            <ul className="ms-5 d-flex flex-column justify-content-center list-group">

                <li className="list-group-item">
                    <iframe src={URL}  title={selectedVideo.snippet.title}
                            gesture={"media"} allow={"encrypted-media"} allowFullScreen={true}
                            className={"p-1 bg-white border rounded img-fluid w-100"}/>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-start">
                    <div className={"flex-column justify-content-center"}>
                        <h3 className="text-lg font-medium text-gray-900">{selectedVideo.snippet.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{selectedVideo.snippet.description} </p>
                    </div>
                    <div> <FontAwesomeIcon icon={faHeart} className={"fs-5 text-danger"} /></div>
                </li>


                <li>
                    {
                        currentUser &&
                        <div>
                    <textarea
                        placeholder={"Add your review Here"}
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                            <button onClick={handlePostReviewBtn} className={"text-white fs-5"}>Post Review</button>
                        </div>
                    }
                </li>




            </ul>


        </div>
    )

}
export default MusicDetails;


// <ul className="ms-5 d-flex flex-column justify-content-center list-group">
//     Reviews!
//     {
//         reviews.map((review) =>
//             <li className="list-group-item">
//                 reviews
//                 {review.review}
//                 <Link to={`/profile/${review.author._id}`} className="float-end">
//                     {review.author.username}
//                 </Link>
//             </li>
//         )
//     }
// </ul>

// <li className="list-group-item">
//     <iframe src={URL}  title={selectedVideo.snippet.title}
//             gesture={"media"} allow={"encrypted-media"} allowFullScreen={true}
//             className={"p-1 bg-white border rounded img-fluid w-100"}/>
// </li>
// <li className="list-group-item d-flex flex-row justify-content-between align-items-start">
//     <div className={"flex-column justify-content-center"}>
//         <h3 className="text-lg font-medium text-gray-900">{selectedVideo.snippet.title}</h3>
//         <p className="mt-1 text-sm text-gray-500">{selectedVideo.snippet.description} </p>
//     </div>
//     <div> <FontAwesomeIcon icon={faHeart} className={"fs-5 text-danger"} /></div>
// </li>

// <Youtube videoId={videoId}  title={selectedVideo.snippet.title}
//          className={"p-1 bg-white border rounded img-fluid w-100"}/>



// <img src={"../images/bg_img.png"} className={"p-1 bg-white border rounded img-fluid w-100"}/>

// <div className="p-1 bg-white border rounded max-w-m">
//     <h3 className="text-lg font-medium text-gray-900">{selectedVideo.snippet.title}</h3>
//     <p className="mt-1 text-sm text-gray-500">{selectedVideo.snippet.description}</p>
// </div>
// <div className="p-1 d-flex flex-row justify-content-evenly">
//     <FontAwesomeIcon icon={faThumbsUp} className={"fs-3 text-primary"} onClick={() => handleVideoLike(selectedVideo)}/>
// </div>


//
// <iframe src={URL}  title={selectedVideo.snippet.title} className={"p-1 bg-white border rounded max-w-m"}
//         alt="thumbnail"/>

// <div className="">
//
//     <div className="col">
//         <ul className="list-group">
//             <li className="list-group-item">Title: {selectedVideo.snippet.title}</li>
//             <li className="list-group-item">Description: {selectedVideo.snippet.description}</li>
//         </ul>
//     </div>
//     <div className="col">
//         <div className="ui embed">
//             <iframe src={URL}  title={selectedVideo.snippet.title}  />
//         </div>
//
//         <div className="ui segment">
//             <h4 className="ui header">{selectedVideo.snippet.title}</h4>
//             <p>{selectedVideo.snippet.description}</p>
//         </div>
//
//     </div>
// </div>
