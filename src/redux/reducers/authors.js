// import store from '../store.js';
// import actions from '../actions.action.js';

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of current state
//
const initialState = {
  authorname: 'JENNIFER AAKER',
  index: 0
}

function authors(state = initialState, action) {
 switch(action.type) {

   case 'SELECT_AUTHOR' : {
   // return the updated state
      console.log('Selecting author!');
      return {
        authorname: action.authorname,
        index: action.index
      };
    }
   default:
      return state;
  }
}

export default authors;
