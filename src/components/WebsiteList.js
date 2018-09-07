import React from 'react';
import authors from '../data/authors.js';
import WebsiteLink from './WebsiteLink.js';

const WebsiteList = (props) => {
// class WebsiteList extends Component {



  const index = props.index;
  // const websiteList = authors[index].websites;
  // const websiteList = authors[index].websites;
  // var websiteList = "";
  // var i = 0;


  const websiteList = authors[index].websites.forEach(element => Object.values(element));
     // const website = Object.values(element).join();

  //    i++;
  //
  //   //  if (websiteList) {
  //   //    websiteList = websiteList + " " + website;
  //   // } else websiteList = websiteList + website;
  //    <WebsiteLink key={i}
  //             value={authors[index].website[i]} />
  // });

  // const websitelist = websiteList.map((websiteList) =>
      // Correct! Key should be specified inside the array.


    // );
    //
    //

  return (<div>


  </div>);
}

export default WebsiteList;
