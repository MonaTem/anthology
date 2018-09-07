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
     console.log(Object.keys(websites));
     website = <li key={i}><a href={website}>{website}</a></li>
     websiteList.push(website);
     i++;
  });

  console.log(websiteList);


    return (
       <div>
        <ul>
        {websiteList}
      </ul>
       </div>
    );
  }


export default WebsiteList;
