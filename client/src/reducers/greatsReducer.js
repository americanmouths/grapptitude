export default function greatsReducer(state = {loading: false, greats: [], likes: [], followedUsers: [], errors: []}, action) {
  switch (action.type) {
    case 'FETCH_GREATS':
      return {loading: false, greats: action.payload, errors: []}
    case 'LIKE_USER_DAILY_GREAT':
      return {
        loading: false,
        ...state,
        likes: [action.payload],
        errors: [action.payload.errors]
      }
     case 'FETCH_USER_LIKES':
     return {loading: false, likes: action.payload, errors: []}
     case 'FOLLOW_USER':
     return {loading: false,
       ...state,
       followedUsers: [action.payload],
       errors: [action.payload.errors]
     }
     case 'FETCH_FOLLOWED_USERS':
     return {loading: false, followedUsers: action.payload}
    default:
      return state;
  }
};
