import React from 'react'
import ReactPlayer from "react-player"
import styled from 'styled-components'


const VideoStyle = styled.div`
   margin-left: 12rem; 
`
const TextStyle = styled.h3`
    margin-left: -15rem;
    color: orange;
    &:hover {
        color: limegreen;
    }
`



export default function Photos(props) {
    const { picture } = props

    if (picture.media_type === 'image') {
        return (
            <div>
                <img src={picture.url} alt={picture.title} />
                <h3>{`${picture.title} of ${picture.date}`}</h3>
                <p>Copyright: {`${picture.copyright}`}</p>
            </div>
        )
    } else if (picture.media_type === 'video') {
        return (
            <VideoStyle>
                <ReactPlayer url={picture.url} alt={picture.title} />
                <TextStyle>{`${picture.title} of ${picture.date}`}</TextStyle>
            </VideoStyle>
        )
    }
    else {
        return (
            <div>
                Didn't Work...try something else...
            </div>
        )
    }

}