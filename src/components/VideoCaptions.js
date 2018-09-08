import React from 'react'
import authors from '../data/authors.js';
import '../styles/Anthology.css';
import '../styles/VideoCaptions.css'

const VideoCaptions = (props) => {

  const index = props.index;

  var VideoCaptionArray = [];
  var i = 0;

  const videoCaption = authors[index].video_caption;
  var videoCaptionLine = '';

  videoCaption.forEach((element) => {
       // console.log(element);
       videoCaptionLine = <li key={i}>{element}</li>
       // console.log(videoCaptionLine);
       VideoCaptionArray.push(videoCaptionLine);
       i++;
  });

  console.log('VideoCaptions ' + VideoCaptions);


    return (
       <div>
        <ul className="video-captions">
        {VideoCaptionArray}
      </ul>
       </div>
    );
  }


export default VideoCaptions;
