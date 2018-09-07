import React from 'react';


const WebsiteLink = (props) => {

  const website = props.website;

  return (<div>
    <a href={website}>{website}</a>
  </div>);
}

export default WebsiteLink;
