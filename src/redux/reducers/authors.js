import store from '../store.js';
// import actions from '../actions.action.js';

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of current state
//
function authors(state = initialState, action) {
 switch(action.type) {

   case 'SELECT_AUTHOR' : {
   // return the updated state
      console.log('Selecting author!');
      return {
        ...state,
        authorName: action.authorName,
        index: action.index
      };
    }
   default:
      return state;
  }
}

export default authors;
