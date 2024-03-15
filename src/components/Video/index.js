import React from 'react';

import "./index.css"

function YouTubeVideo() {
  return (
    <div className='video'>
      <iframe
        width="290" 
        height="150"
        src="https://www.youtube.com/embed/jg5d59ligW4" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
