import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "../users/users-thunks";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findFollowersThunk, findFollowingThunk} from "./follows-thunks";
import {Link} from "react-router-dom";

const Follows = ({uid}) => {
    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    }, [])

    return(
        <>
            <div className={"fs-5 text-primary mb-2"}>Following</div>
            <div className="list-group mb-2">
                {
                    following && following.map((follow) =>
                        <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                            {follow.followed.username}
                        </Link>
                    )
                }
            </div>
            <div className={"fs-5 text-primary mb-2"}>Followers</div>
            <div className="list-group">
                {
                    followers && followers.map((follow) =>
                        <Link to={`/profile/${follow.follower._id}`} className="list-group-item">
                            {follow.follower.username}
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default Follows
