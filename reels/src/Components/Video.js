import React from 'react'

export default function Video(props) {
  
  const handlemute=(e)=>{
        e.preventDefault();
        e.target.muted=!e.target.muted;
  }
  
  
  
    return (
        <video className='video-styles' onClick={handlemute} controls muted="muted" type="video.mp4">
            <source src={props.source} type='video/webm'></source>
        </video>
  )
}
