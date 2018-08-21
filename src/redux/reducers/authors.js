// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of current state
//
function authors(state = [], action) {
 switch(action.type) {
   case 'SELECT_AUTHOR' :
   // return the updated state
      console.log('Selecting author!');
      const i = action.index;
      return state[i];
   default:
      return state;
  }
  return state;
}

export default authors;
