import React from 'react'
import axios from "axios";

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const DETAILS_URL = ' https://www.googleapis.com/youtube/v3/videos?part=snippet&id='
const KEY = 'AIzaSyAvKa9v1oJfh9YbQ3384b8EPKBf8MAfXsg'
// const KEY = 'AIzaSyAvKa9v1oJfh9YbQ3384b8EPKBf8MAfXsg'

// AIzaSyAvKa9v1oJfh9YbQ3384b8EPKBf8MAfXsg
// key: 'AIzaSyC2l5lTn2wi7D_Ah_r7U5DclPIMUnNPtmU',
// key: 'AIzaSyCXvCVUYJicOrsv3XIPuVlauADTncLD0Dk'
// AIzaSyATo2pbbD_uXTp2geU42aejmp2H9QOxt0A




export const findMusicBySearchTerm = async (term) => {

    const OTHER_TUBE_API  = {
        method: 'GET',
        url: 'https://ytube-videos.p.rapidapi.com/search-video',
        params: {q: term, max: '5', lang: 'EN'},
        headers: {
            'X-RapidAPI-Key': 'b7051ceb11mshc978566c429fc32p1459a1jsnec7785041c59',
            'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
        }
    };

    const YOUTUBE_API = {
        method: 'GET',
        url: SEARCH_URL,
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 5,
            key: KEY,
            q: term
        }
    };

    const options = KEY===''? OTHER_TUBE_API : YOUTUBE_API;

    const response = await axios.request(options)

    console.log("find music by search term", response.data.items)
    console.log("videos", response.data.items)
    console.log("find music by search term", response.data.items[0].id)

    return response.data.items
    //Search
}

//TODO
export const findMusicById = async (id) => {

    const YOUTUBE_API = `${DETAILS_URL}${id}&key=${KEY}`


    const OTHER_TUBE_API = {
        method: 'GET',
        url: 'https://youtube-video-info.p.rapidapi.com/video_formats',
        params: {video: id},
        headers: {
            'X-RapidAPI-Key': 'b7051ceb11mshc978566c429fc32p1459a1jsnec7785041c59',
            'X-RapidAPI-Host': 'youtube-video-info.p.rapidapi.com'
        }
    };

    const options = KEY===''? OTHER_TUBE_API : YOUTUBE_API;

    const response = await axios.get(options)
    console.log("find music by id", response.data)
    return response.data.items
}
