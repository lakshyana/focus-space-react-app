import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMusicBySearchTermThunk, findMusicByIdThunk} from "./music-thunks";
import {userLikesMusicThunk} from "../likes/likes-thunks";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom";

// import MusicList from "./music-list";

const MusicSearch = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [searchTerm, setSearchTerm] = useState('Lofi')
    const {music, loading, video} = useSelector((state) => state.music)
    const [selectedVideo, setSelectedVideo] = useState(video)

    console.log("show states from music search")
    console.log("music", music)
    console.log("loading", loading)
    console.log("selectedVideo", selectedVideo)

    // const {selectedVideo, setSelectedVideo} = useState((music) => music.selectedVideo)
    // console.log("selected video", selectedVideo)
    const navigate = useNavigate();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMusicBySearchTermThunk(searchTerm))
    }, [])

    const handleSubmit = (searchTerm) => {
        dispatch(findMusicBySearchTermThunk(searchTerm))

    }

    const handleVideoSelect = (video) => {
        setSelectedVideo(video)
        dispatch(findMusicByIdThunk(video.id.videoId))

        console.log("clicked selected video details", selectedVideo)

        navigate(`/details/${video.id.videoId}`)
        // window.location.href=

    }

    const handleVideoLike = (video) => {
        {
            currentUser ? dispatch(userLikesMusicThunk(
                {
                    uid: currentUser._id, mid: video.id.videoId,
                }

            )) : navigate('/login')
        }
    }

    const searchList = music.map((music)=>{
        return (
        <div className="mx-auto flex flex-column justify-content-center border-b border-gray-200">
            <img src={music.snippet.thumbnails.medium.url} className={"p-1 bg-white border rounded max-w-m"}
                 alt="thumbnail"/>
            <div className="p-1 bg-white border rounded max-w-m">
                <h3 className="text-lg font-medium text-gray-900">{music.snippet.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{music.snippet.description}</p>
            </div>
            <div className="p-1 d-flex flex-row justify-content-evenly">
                <FontAwesomeIcon icon={faThumbsUp} className={"fs-3 text-primary"} onClick={() => handleVideoLike(music)}/>
                <FontAwesomeIcon icon={faCircleInfo} className={"fs-3 text-primary"} onClick={() => handleVideoSelect(music)}/>
            </div>
        </div>
    )});


    return (
        <div className={"m-5 p-5 col-xl-8 col-xxl-8 col-md-10 col-10"}>
            <h1>Music Search</h1>
            <ul className="list-group">

                <div className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findMusicBySearchTermThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"

                        defaultValue={searchTerm}/>
                </div>


            </ul>


            <div className= "col-xxl-8 col-xl-9 col-md-8 mx-auto ">
                MUSIC SEARCH LIST
                {searchList}
            </div>



        </div>
    )
}

export default MusicSearch



// onChange={(e) => {
//     setSearchTerm(e.target.value)
// }}


//TODO: CLean up code

// <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// onClick={() => setSelectedVideo(music)}>
// Select
// </button>



// {
//     music && music.map((video) =>
//         <li key={video.id.videoId} className="list-group-item">
//             <i onClick={() => {
//                 dispatch(userLikesMusicThunk({
//                     uid: 111, mid: music.id
//                 }))
//             }} className="float-end bi bi-hand-thumbs-up"></i>
//             <i className="float-end bi bi-hand-thumbs-down me-2"></i>
//         </li>
//     )
// }


// {
//     music && music.map((video) =>
//         <li key={video.id.videoId} className="list-group-item">
//             <i onClick={() => {
//                 dispatch(userLikesMusicThunk({
//                     uid: 111, mid: music.id
//                 }))
//             }} className="float-end bi bi-hand-thumbs-up"></i>
//             <i className="float-end bi bi-hand-thumbs-down me-2"></i>
//         </li>
//     )
// }




//
// {
//     music && music.map((music) =>
//         <li key={music.id} className="list-group-item">
//             <i onClick={() => {
//                 dispatch(userLikesMusicThunk({
//                     uid: 111, mid: music.id
//                 }))
//             }} className="float-end bi bi-hand-thumbs-up"></i>
//             <i className="float-end bi bi-hand-thumbs-down me-2"></i>
//             <img src={music.Poster} height={50}/>
//             <Link to={`/details/${music.imdbID}`}>
//                 {music.Title}
//             </Link>
//         </li>
//     )
// }
