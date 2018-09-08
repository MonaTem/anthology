import React from 'react'
import authors from '../data/authors.js';
import '../styles/Anthology.css';

const WebsiteList = (props) => {

  const index = props.index;

  var websiteList = [];
  var i = 0;

  const websites = authors[index].websites;

   websites.forEach((element) => {
     let website = Object.values(element);
     website = <li key={i}><a href={website}>{website}</a></li>
     websiteList.push(website);
     i++;
  });


    return (
       <div>
        <ul>
        {websiteList}
      </ul>
       </div>
    );
  }


export default WebsiteList;
