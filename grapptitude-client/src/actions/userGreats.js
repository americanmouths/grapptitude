import fetch from 'isomorphic-fetch'

export function fetchUserGreats() {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  return (dispatch) => {
    dispatch({type: 'LOADING_USER_DAILY_GREATS'});
    return fetch(`/api/users/${id}/daily_greats`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
      .then(response => response.json())
      .then(userGreats => dispatch({ type: 'FETCH_USER_DAILY_GREATS', payload: userGreats }));
  };
}

export function newUserGreat(userGreatData) {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const request = JSON.stringify(userGreatData)
  return (dispatch) => {
    dispatch({type: 'ADDING_NEW_USER_GREAT'});
    return fetch(`/api/users/${id}/daily_greats`, {
      method: 'post',
      body: request,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    }).then(response => response.json())
      .then(userGreats => dispatch({ type: 'ADD_USER_DAILY_GREAT', payload: userGreats }));
  };
}

export function deleteUserGreatFromAPI(greatId, token){
  const id = localStorage.getItem("id");
  return (dispatch) => {
    dispatch({type: 'DELETING_USER_GREAT'});
    return fetch(`/api/users/${id}/daily_greats/${greatId}`, {
      method: 'delete',
      body: JSON.stringify({daily_great_id: greatId}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    }).then(response => response.json())
      .then(userGreats => dispatch({
        type: 'DELETE_USER_DAILY_GREAT',
        payload: userGreats
      }));
  };
}
