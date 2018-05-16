import fetch from 'isomorphic-fetch'
const token = localStorage.getItem("jwtToken")

export function fetchUserGreats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_USER_DAILY_GREATS'});
    return fetch('http://localhost:3001/api/daily_greats', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(userGreats => dispatch({ type: 'FETCH_USER_DAILY_GREATS', payload: userGreats }));
  };
}
