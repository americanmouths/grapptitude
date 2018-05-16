export default function userGreatsReducer(state = {loading: false, userGreats: []}, action) {
  switch (action.type) {
    case 'FETCH_USER_DAILY_GREATS':
      return {loading: false, userGreats: action.payload}
    default:
      return state;
  }
};
