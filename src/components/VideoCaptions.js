import React from 'react'
import authors from '../data/authors.js';
import '../styles/Anthology.css';
import '../styles/VideoCaptions.css'

const VideoCaptions = (props) => {

  const ix = props.ix;

  var VideoCaptionArray = [];
  // var i = 0;

  var videoCaption = authors[ix].video_caption;
  console.log(videoCaption.length);

  var videoCaptionLine = '';

  if (videoCaption.length > 3) {
    let element = videoCaption;
    videoCaptionLine = <li key={0}>{element}</li>
    VideoCaptionArray.push(videoCaptionLine);

    } else
      for (var i = 0; i < videoCaption.length; i++) {
          let element = videoCaption[i];
          videoCaptionLine = <li key={i}>{element}</li>
          VideoCaptionArray.push(videoCaptionLine);
          }


    return (
       <div>
        <ul className="video-captions">
        {VideoCaptionArray}
      </ul>
       </div>
    );
  }


export default VideoCaptions;
