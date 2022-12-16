import React from 'react'
import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "./users-thunks";
import {findReviewsByAuthor} from "../reviews/reviews-service";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {Link, useNavigate} from "react-router-dom";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "../follows/follows-thunks";
import Follows from "../follows/follows";
import Likes from "../likes/likes";
import {userLikesMusicThunk} from "../likes/likes-thunks";


const PublicProfile = () => {
    const {uid} = useParams()
    const {currentUser, publicProfile} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleFollowBtn = () => {
        {
            currentUser ? dispatch(followUserThunk({followed: uid})) : navigate('/login')
        }
        dispatch(followUserThunk({
            followed: uid
        }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
        dispatch(userLikesMusicThunk(uid))
    }, [uid])

    return(
        <div className={"m-5 p-5 text-white"}>
            <button
                onClick={handleFollowBtn}
                className="btn btn-success float-end">
                Follow
            </button>
            <h1>{publicProfile && publicProfile.firstName}</h1>

            <Follows uid={uid}/>

            <ul>
                {
                    reviews && reviews.map((review) =>
                        <li>
                            <Link to={`/details/${review.music}`}>
                                {review.review} {review.mid}
                            </Link>
                        </li>
                    )
                }
            </ul>



        </div>
    )
}

export default PublicProfile

// <Likes uid={uid}/>
// <ul>
// {
//     reviews && reviews.map((review) =>
//     <li>
//         <Link to={`/details/${review.imdbID}`}>
//             {review.review} {review.imdbID}
//         </Link>
//     </li>
// )
// }
// </ul>
