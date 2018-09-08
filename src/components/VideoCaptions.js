import React from 'react'
import authors from '../data/authors.js';
import '../styles/Anthology.css';
import '../styles/VideoCaptions.css'

const VideoCaptions = (props) => {

  const ix = props.ix;

  var VideoCaptionArray = [];
  // var i = 0;

  var videoCaption = authors[ix].video_caption;
  var videoCaptionLine = '';
  console.log(videoCaption);

  videoCaption.forEach((element, index) => {
       console.log(index);
       videoCaptionLine = <li key={index}>{element}</li>
       VideoCaptionArray.push(videoCaptionLine);
       // i++;
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
