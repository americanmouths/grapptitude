export default function userGreatsReducer(state = {
  loading: false,
  userGreats: []
}, action) {
  switch (action.type) {
    case 'FETCH_USER_DAILY_GREATS':
      return {loading: false, userGreats: action.payload}
    case 'ADD_USER_DAILY_GREAT':
      return {loading: false, ...state, userGreats: state.userGreats.concat(action.payload)}
    case 'DELETE_USER_DAILY_GREAT':
      return{loading: false, ...state, userGreats: action.JSON.userGreats}
    default:
      return state;
  }
};
