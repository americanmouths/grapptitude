export default function greatsReducer(state = {loading: false, greats: []}, action) {
  switch (action.type) {
    case 'FETCH_GREATS':
      return {loading: false, greats: action.payload}
    default:
      return state;
  }
};
