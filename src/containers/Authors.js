import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Authors.css';
import '../styles/Anthology.css';
import NavTop from '../components/NavTop.js';
import NavBottomNoToggle from '../components/NavBottomNoToggle.js';
// import authors from './redux/reducers/authors.js';
// import { actions } from '.redux/actions/actions.js';
import * as actions from '../redux/actions/actions.js';
import {bindActionCreators} from 'redux';
// import Author from '../components/Author.js';

class Authors extends Component {

  render() {
    return (<div>
      <NavTop page={'Authors'}/>
      <div className="media">
        <img id="cover-001a" className="img-fluid" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      </div>
      <div className="media-body author-list">
        <div className="row">
          <div className="col-6 offset-5 author text-left">
            <p className="active">
              JENNIFER AAKER
            </p>
            <p className="active">
              GENE BELLINGER
            </p>
            <p>
              JULIA BORST BRAZAS
            </p>
            <p className="active">
              DONALD DAVIS
            </p>
            <p>
              BRENT DYKES
            </p>
            <p className="active">
              MITCH DITKOFF
            </p>
            <p>
              JON FERREIRA
            </p>
            <p className="active">
              HOWARD GARDNER
            </p>
            <p>
              KIM GASKINS
            </p>
            <p className="active">
              GERALD HÜTHER
            </p>
            <p className="active">
              MARC JADOUL
            </p>
          </div>
          <div className="col-6 offset-7 author text-left second-author-col">
            <p>
              JOEL KURZMAN
            </p>
            <p>
              SARAH KAJDER
            </p>
            <p className="active">
              DOUG LIPMAN
            </p>
            <p>
              ILANA SIMONS
            </p>
            <p className="active">
              MICHAEL MARGOLIS
            </p>
            <p className="active">
              ANDY SMITH
            </p>
            <p className="active">
              JIMMY NEIL SMITH
            </p>
            <p className="active">
              LUKE SULLIVAN
            </p>
            <p className="active">
              JULIE SPRINGER
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
          </div>
        </div>
        <div className="row">
          <div className="col-12 offset-1 info">
            <p>
              FOR MORE INFORMATION
            </p>
            <p className="clickName">
              CLICK ON THE AUTHOR'S NAME
            </p>
          </div>
        </div>
      </div>

      <NavBottomNoToggle page={'Authors'}/>
    </div>)
  }
}

function mapStateToProps(state) {
  return {authorName: state.authorName, index: state.index}
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onAuthorSelected(AUTHOR_SELECTED) {
//       dispatch(actions.selectAuthor(authorName, index))
//    }
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
