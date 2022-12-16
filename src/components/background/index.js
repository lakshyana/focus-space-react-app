import React, { Component } from 'react'
// import axios for making http requests
import axios from 'axios'

// api url + random photo url GET extension + client id
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=LJC1_bNqmvyhQC85MoyJYcjEcgeYhZ-FDIbtdEogqso'

class ShowPhoto extends Component {
    constructor () {
        super()

        this.state = {
            photo: null
        }
    }

    componentDidMount () {
        return axios({
            url: apiUrl,
            method: 'GET'
        })
            .then(res => this.setState({ pictureUrl: res.data.urls.regular }))
            .catch('Error loading background', console.error)
    }

    // render photo
    render () {
        const { pictureUrl } = this.state
        let backgroundPhoto = <img src={pictureUrl} alt='bg'
                                   style={ {alignSelf: 'center',
                                       objectFit: 'cover',
                                           //stretch background image to fit the entire window
                                        width: '100%',
                                        height: '100%',
                                        position: 'fixed',
                                       backgroundSize: 'cover',
                                        zIndex: -5} } />


        // // zIndex: '-1'
        // width: '100',
        // height: '100',

        return (
            <span>
                {backgroundPhoto}
            </span>
        )
    }
}

export default ShowPhoto
