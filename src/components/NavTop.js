import React from 'react';
import '../styles/Anthology.css';
import LinksTop from './LinksTop.js'

const NavTop = (props) => {

  var NavStyle = {
    color: '#254489',
    textDecoration: 'none'
  }

  var NavStyleBold = {
    color: '#254489',
    textDecoration: 'none',
    fontWeight: 'strong'
  }

  switch (props.page) {

    case "Home":

      return (<div>
        <LinksTop navstylehome={NavStyleBold} navstyledesc={NavStyle} navstyletoc={NavStyle} navstyleauthors={NavStyle} navstylebuy={NavStyle}/>
      </div>);

    case "Description":
      return (<div>
        <LinksTop navstylehome={NavStyle} navstyledesc={NavStyleBold} navstyletoc={NavStyle} navstyleauthors={NavStyle} navstylebuy={NavStyle}/>
      </div>);

    case "TableOfContents":
      return (<div>
        <LinksTop navstylehome={NavStyle} navstyledesc={NavStyle} navstyletoc={NavStyleBold} navstyleauthors={NavStyle} navstylebuy={NavStyle}/>
      </div>);

    case "Authors":
      return (<div>
        <LinksTop navstylehome={NavStyle} navstyledesc={NavStyle} navstyletoc={NavStyle} navstyleauthors={NavStyleBold} navstylebuy={NavStyle}/>
      </div>);

    case "Buy":
      return (<div>
        <LinksTop navstylehome={NavStyle} navstyledesc={NavStyle} navstyletoc={NavStyle} navstyleauthors={NavStyle} navstylebuy={NavStyleBold}/>
      </div>);

    default:
      return (<div>
          <LinksTop navstylehome = {NavStyleBold} navstyledesc = {NavStyle} navstyletoc = {NavStyle} navstyleauthors = {NavStyle} navstylebuy = {NavStyle} />
      </div>);
  }

}

export default NavTop;
