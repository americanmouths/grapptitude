export default function userGreatsReducer(state = {
  loading: false,
  userGreats: []
}, action) {
  switch (action.type) {
    case 'FETCH_USER_DAILY_GREATS':
      return {loading: false, userGreats: action.payload}
    case 'ADD_USER_DAILY_GREAT':
      return {loading: false, ...state, userGreats: state.userGreats.concat(action.payload)}
    default:
      return state;
  }
};
