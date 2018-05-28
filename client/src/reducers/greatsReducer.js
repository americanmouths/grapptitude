export default function greatsReducer(state = {loading: false, greats: [], likes: [], followedUsers: []}, action) {
  switch (action.type) {
    case 'FETCH_GREATS':
      return {loading: false, greats: action.payload}
    case 'LIKE_USER_DAILY_GREAT':
      return {
        loading: false,
        ...state,
        likes: [action.payload]
      }
     case 'FETCH_USER_LIKES':
     return {loading: false, likes: action.payload}
     case 'FOLLOW_USER':
     return {loading: false, followedUsers: action.payload}
    default:
      return state;
  }
};
