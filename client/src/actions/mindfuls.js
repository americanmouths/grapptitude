import fetch from 'isomorphic-fetch'

export function fetchMindfuls() {
  return (dispatch) => {
    dispatch({type: 'LOADING_MINDFULS'});
    return fetch('/api/daily_mindfuls')
      .then(response => response.json())
      .then(mindfuls => dispatch({ type: 'FETCH_MINDFULS', payload: mindfuls }));
  };
}
