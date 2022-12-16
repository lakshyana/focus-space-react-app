import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findMusicLikedByUserThunk} from "./likes-thunks";
import MusicItem from "../search/music-item";

const Likes = ({uid, p1, p2}) => {
    // const {likes} = useSelector((state) => state.likes)
    const likes = [uid]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMusicLikedByUserThunk(uid))
    }, [])
    return(
        <>
            <h2>Likes</h2>
            <div className="list-group">
                {
                    likes.map((like) =>
                        {
                           MusicItem(uid, JSON.stringify(like, null, ))
                        }

                    )
                }
            </div>
        </>
    )
}

export default Likes


// <div>
// <pre>
// {JSON.stringify(like, null, 2)}
// </pre>
// </div>
