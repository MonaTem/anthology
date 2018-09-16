import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Authors.css';
import '../styles/Anthology.css';
// import NavBottomNoToggle from '../components/NavBottomNoToggle.js';
import * as authoractions from '../redux/actions/authoractions.js'
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class Authors extends Component {

  render() {

    return (<div className="container">
      <nav className="navbar navbar-light navbar-expand-sm navtop p-4">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse navtop-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/" className="link-anthology">HOME</Link>
            </li>
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/description" className="link-anthology">DESCRIPTION</Link>
            </li>
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/tableofcontents" className="link-anthology">TABLE OF CONTENTS</Link>
            </li>
            <li className="nav-item nav-item-anthology nav-item-top active">
              <Link to="/authors" className="link-anthology">AUTHORS</Link>
            </li>
            <li className="nav-item nav-item-anthology nav-item-top">
              <Link to="/buy" className="link-anthology">BUY</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="media">
        <img id="cover-001" className="img-fluid cover-001" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      </div>
      <div className="media-body author-list">
        <div className="row">
          <div className="col-4 offset-5 author text-left">
            <p className="active">
              <Link to={'/author/0/JENNIFER_AAKER'}>JENNIFER AAKER</Link>
            </p>
            <p className="active">
              <Link to={'/author/1/GENE_BELLINGER'}>GENE BELLINGER</Link>
            </p>
            <p>
              JULIA BORST BRAZAS
            </p>
            <p className="active">
              <Link to={'/author/3/DONALD_DAVIS'}>DONALD DAVIS</Link>
            </p>
            <p>
              BRENT DYKES
            </p>
            <p className="active">
              <Link to={'/author/8/MITCH_DITKOFF'}>MITCH DITKOFF</Link>
            </p>
            <p>
              JON FERREIRA
            </p>
            <p className="active">
              <Link to={'/author/10/HOWARD_GARDNER'}>HOWARD GARDNER</Link>
            </p>
            <p>
              KIM GASKINS
            </p>
            <p className="active">
              <Link to={'/author/6/GERALD_HÜTHER'}>GERALD HÜTHER</Link>
            </p>
            <p className="active">
              <Link to={'/author/2/MARC_JADOUL'}>MARC JADOUL</Link>
            </p>
          </div>
          <div className="col-4 author text-left second-author-col">
            <p>
              JOEL KURZMAN
            </p>
            <p>
              SARAH KAJDER
            </p>
            <p className="active">
              <Link to={'/author/4/DOUG_LIPMAN'}>DOUG LIPMAN</Link>
            </p>
            <p>
              ILANA SIMONS
            </p>
            <p className="active">
              <Link to={'/author/5/MICHAEL_MARGOLIS'}>MICHAEL MARGOLIS</Link>
            </p>
            <p className="active">
              <Link to={'/author/7/ANDY_SMITH'}>ANDY SMITH</Link>
            </p>
            <p className="active">
              <Link to={'/author/9/JIMMY_NEIL_SMITH'}>JIMMY NEIL SMITH</Link>
            </p>
            <p className="active">
              <Link to={'/author/11/LUKE_SULLIVAN'}>LUKE SULLIVAN</Link>
            </p>
            <p className="active">
              <Link to={'/author/12/JULIE_SPRINGER'}>JULIE SPRINGER</Link>
            </p>
            <p>
              STORYREGIONS
            </p>
            <p>
              JASON XENOPOOULOS
            </p>
            <p>
              RUEDIGER DRISCHEL (EDITOR)
            </p>
            <div className="col-4"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 info">
            <p>
              FOR MORE INFORMATION
            </p>
            <p className="clickName">
              CLICK ON THE AUTHOR'S NAME
            </p>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-light navbar-expand-sm bottom-nav-bar bottom-nav bottom-nav-descr">
        <ul className="navbar-nav">
          <li className="nav-item nav-item-anthology nav-item-bottom">
            <Link to="/about" className="link-anthology">ABOUT</Link>
          </li>
          <li className="nav-item nav-item-anthology nav-item-bottom">
            <Link to="/imprint" className="link-anthology imprint">IMPRINT</Link>
          </li>
          <li className="nav-item nav-item-anthology nav-item-bottom">
            <p>© 2018
            </p>
          </li>
          <li className="nav-item nav-item-anthology nav-item-bottom">
            <Link to="/contact" className="link-anthology">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>)
  }
}

function mapStateToProps(state, ownProps) {
  return {authorName: state.authorName, ix: state.ix}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authoractions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
