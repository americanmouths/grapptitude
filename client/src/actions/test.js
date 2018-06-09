export function testLikeUserGreat(greatId, token){
  const id = localStorage.getItem("id")
  return (dispatch) => {
    dispatch({type: 'TEST_LIKING_USER_GREAT'});
    return fetch(`/api/users/${id}/daily_greats/${greatId}/test`, {
      method: 'post',
      body: JSON.stringify({daily_great_id: greatId}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    }).then(response => response.json())
      .then(great => dispatch({ type: 'TEST_LIKE_USER_DAILY_GREAT', payload: great}));
  };
}

export function testFetchFollowedUsers(){
  const id = localStorage.getItem("id")
  return (dispatch) => {
    dispatch({type: 'TEST_FETCHING_FOLLOWED_USERS'});
    return fetch(`/api/users/${id}/followers`)
    .then(response => response.json())
      .then(greats => dispatch({
        type: 'TEST_FETCH_FOLLOWED_USERS',
        payload: greats
      }));
  };
}
