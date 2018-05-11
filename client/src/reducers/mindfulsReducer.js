export default function mindfulsReducer(state = {loading: false, mindfuls: []}, action) {
  switch (action.type) {
    case 'FETCH_MINDFULS':
      return {loading: false, mindfuls: action.payload}
    default:
      return state;
  }
};
