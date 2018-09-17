import React from 'react'
import authors from '../data/authors.js';
import '../styles/Anthology.css';

const AuthorSpaces = (props) => {

  const ix = props.ix;

  const bio = authors[ix].bio;
  // console.log("bio length is " + bio.length);

  const biolength = bio.length;
  var biospaces = Math.ceil(biolength / 40);
  var spaces = [];
  console.log("biospaces is " + biospaces);


  switch (biospaces) {
    case 10:
    case 9:
    case 8:
    case 7:
      biospaces = 4;
      break;
    case 6:
       biospaces = 5;
       break;
    case 5:
       biospaces = 9;
       break;
    case 4:
    case 3:
    case 2:
    case 1:
        biospaces = 10;
        break;
    default:
        break;
  }

    if (biospaces <= 10) {
        for (let i = 0; i  <  biospaces; i++) {
            let space = <li key={i}><br></br></li>
            spaces.push(space);
        }
    }


    return (
       <div>
        <ul>
        {spaces}
        </ul>
      </div>
    );
  }


export default AuthorSpaces;
