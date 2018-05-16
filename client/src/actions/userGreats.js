import fetch from 'isomorphic-fetch'

export function fetchUserGreats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_USER_DAILY_GREATS'});
    return fetch('http://localhost:3001/api/daily_greats')
      .then(response => response.json())
      .then(userGreats => dispatch({ type: 'FETCH_USER_DAILY_GREATS', payload: userGreats }));
  };
}
