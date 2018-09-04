//two ways to code select author action creator
// which one to use?

// select author
export const SELECT_AUTHOR = "SELECT_AUTHOR";

const authoractions = { selectAuthor(authorname, index) {
    return {
      type: SELECT_AUTHOR,
      authorname,
      index
    }
  }
}

/*
//  select author
*/
// export const selectAuthor2 = () => dispatch => {
//  dispatch({
//   type: 'SELECT_AUTHOR',
//   payload: 'index, authorname'
//  })
// }

export default authoractions;
