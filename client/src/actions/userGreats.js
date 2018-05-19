import fetch from 'isomorphic-fetch'

export function fetchUserGreats() {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  return (dispatch) => {
    dispatch({type: 'LOADING_USER_DAILY_GREATS'});
    return fetch(`http://localhost:3001/api/users/${id}/daily_greats`, {
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
