export default function mindfulsReducer(state = {
  loading: false,
  mindfuls: []
}, action) {
  switch (action.type) {
    case 'LOADING_MINDFULS':
      return {...state, loading: true}
    case 'FETCH_MINDFULS':
      return {
        ...state,
        loading: false,
        mindfuls: action.payload
        }
    default:
      return state;
  }
};
