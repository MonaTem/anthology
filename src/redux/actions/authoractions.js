//two ways to code select author action creator
// which one to use?

// select author
export const SELECT_AUTHOR = "SELECT_AUTHOR";

const authoractions = { selectAuthor(authorname, ix) {
    return {
      type: SELECT_AUTHOR,
      authorname,
      ix
    }
  }
}

/*
//  select author
*/
// export const selectAuthor2 = () => dispatch => {
//  dispatch({
//   type: 'SELECT_AUTHOR',
//   payload: 'ix, authorname'
//  })
// }

export default authoractions;
