//two ways to code select author action creator
// which one to use?

// select author

export function selectAuthor(authorName, index) {
  return {
    type: 'SELECT_AUTHOR',
    authorName,
    index
  }
}

/*
//  select author
*/
export const selectAuthor2 = () => dispatch => {
 dispatch({
  type: 'SELECT_AUTHOR',
  payload: 'index, authorName'
 })
}
