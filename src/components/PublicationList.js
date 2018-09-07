import React from 'react'
import authors from '../data/authors.js';
import '../styles/Anthology.css';

const PublicationList = (props) => {

  const index = props.index;

  var PublicationList = [];
  var i = 0;

  const publications = authors[index].publications;

   publications.forEach((element) => {
     let publication = Object.values(element);
     console.log(Object.keys(publications));
     publication = <li key={i}><a href={publication}>{publication}</a></li>
     PublicationList.push(publication);
     i++;
  });

  console.log(PublicationList);


    return (
       <div>
        <ul>
        {PublicationList}
      </ul>
       </div>
    );
  }


export default PublicationList;
