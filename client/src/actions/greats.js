import fetch from 'isomorphic-fetch'

export function fetchGreats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_GREATS'});
    return fetch('/api/home')
      .then(response => response.json())
      .then(greats => dispatch({ type: 'FETCH_GREATS', payload: greats }));
  };
}
