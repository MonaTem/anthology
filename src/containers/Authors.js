import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Authors.css';
import '../styles/Anthology.css';
import NavTop from '../components/NavTop.js';
import NavBottomNoToggle from '../components/NavBottomNoToggle.js';
// import authors from './redux/reducers/authors.js';
// import { actions } from '.redux/actions/actions.js';
// import { SELECT_AUTHOR } from '../redux/actions/actions.js';
import * as authoractions from '../redux/actions/authoractions.js'
import {bindActionCreators} from 'redux';
// import Author from '../components/Author.js';
import {Link} from 'react-router-dom';
// import store from '../redux/store.js';

class Authors extends Component {


  // constructor(props) {
  //   super(props);
    // this.state = {
    //   authorname: 'JENNIFER AAKER',
    //   index: 0
    // }
    // this.state.bind(this);
  // }

  // store.getState();
  //
  // console.log("state is " + state.authorname + " " + state.index);

  // console.log(store.getState());


  render() {

    // let authorname = 'JENNIFER AAKER';
    // let index = 0;
    // console.log ("author name and index = " + authorname + " " + index);

    return (<div className="container">
      <NavTop page={'Authors'}/>
      <div className="media">
        <img id="cover-001a" className="img-fluid" src="/images/FrontCover.jpeg" alt="Anthology Front Cover"/>
      </div>
      <div className="media-body author-list">
        <div className="row">
          <div className="col-6 offset-5 author text-left">
            <p className="active">
               <Link to={'/author/0'}>JENNIFER AAKER</Link>
            </p>
            <p className="active">
              <Link to={'/author/1'}>GENE BELLINGER</Link>
            </p>
            <p>
              JULIA BORST BRAZAS
            </p>
            <p className="active">
                <Link to={'/author/3'}>DONALD DAVIS</Link>
            </p>
            <p>
              BRENT DYKES
            </p>
            <p className="active">
                <Link to={'/author/8'}>MITCH DITKOFF</Link>
            </p>
            <p>
              JON FERREIRA
            </p>
            <p className="active">
              <Link to={'/author/10'}>HOWARD GARDNER</Link>
            </p>
            <p>
              KIM GASKINS
            </p>
            <p className="active">
                <Link to={'/author/6'}>GERALD HÜTHER</Link>
            </p>
            <p className="active">
              <Link to={'/author/2'}>MARC JADOUL</Link>
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
              <Link to={'/author/4'}>DOUG LIPMAN</Link>
            </p>
            <p>
              ILANA SIMONS
            </p>
            <p className="active">
              <Link to={'/author/5'}>MICHAEL MARGOLIS</Link>
            </p>
            <p className="active">
                <Link to={'/author/7'}>ANDY SMITH</Link>
            </p>
            <p className="active">
                <Link to={'/author/9'}>JIMMY NEIL SMITH</Link>
            </p>
            <p className="active">
                <Link to={'/author/11'}>LUKE SULLIVAN</Link>
            </p>
            <p className="active">
                <Link to={'/author/12'}>JULIE SPRINGER</Link>
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

function mapStateToProps(state, ownProps) {
  return {authorName: state.authorName, index: state.index}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(authoractions, dispatch)}
}



// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(SELECT_AUTHOR, dispatch);
// }

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators(
//     {
//       SELECT_AUTHOR,
//     },
//     dispatch
//    )
//   // otherService, // this is not to be wrapped into dispatch
// })

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
