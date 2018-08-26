import store from './redux/store.js';

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of current state
//
function authors(state = store.initialState, action) {
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
