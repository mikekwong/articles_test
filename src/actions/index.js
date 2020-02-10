import {
  ADD_ARTICLE,
  FETCH_SUCCESS,
  FETCH_DATA,
  FETCH_FAILURE
} from '../constants'

export const addArticle = payload => {
  return {
    type: ADD_ARTICLE,
    payload
  }
}

export const getData = () => async dispatch => {
  // initiate loading state
  dispatch({
    type: FETCH_DATA
  })
  try {
    // update payload in reducer on success
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    dispatch({ type: FETCH_SUCCESS, payload: json })
  } catch (err) {
    // update error in reducer on failure
    dispatch({
      type: FETCH_FAILURE,
      error: err
    })
  }
}

// export const getData = () => {
//   return function (dispatch) {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => {
//         return { type: 'FETCH_SUCCESS', payload: json }
//       })
//   }
// }
