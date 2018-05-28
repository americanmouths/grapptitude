import fetch from 'isomorphic-fetch'

export function fetchGreats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_GREATS'});
    return fetch('/api/home')
      .then(response => response.json())
      .then(greats => dispatch({ type: 'FETCH_GREATS', payload: greats }));
  };
}

export function likeUserGreatFromAPI(greatId, token){
  const id = localStorage.getItem("id")
  return (dispatch) => {
    dispatch({type: 'LIKING_USER_GREAT'});
    return fetch(`/api/users/${id}/daily_greats/${greatId}/like`, {
      method: 'post',
      body: JSON.stringify({daily_great_id: greatId}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(response => response.json())
      .then(likes => dispatch({ type: 'LIKE_USER_DAILY_GREAT', payload: likes}));
  };
}

export function fetchUserLikes(){
  const id = localStorage.getItem("id")
  return (dispatch) => {
    dispatch({type: 'LOADING_LIKES'});
    return fetch(`/api/users/${id}/likes`)
    .then(response => response.json())
      .then(likes => dispatch({
        type: 'FETCH_USER_LIKES',
        payload: likes
      }));
  };
}
