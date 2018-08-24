//two ways to code select author action creator
// which one to use?

// select author

export function selectAuthor(index) {
  return {
    type: 'SELECT_AUTHOR',
    index
  }
}

/*
//  select author
*/
export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SELECT_AUTHOR',
  payload: 'index'
 })
}
