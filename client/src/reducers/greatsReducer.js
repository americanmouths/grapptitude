export default function greatsReducer(state = {
  loading: false,
  greats: [],
  likes: [],
  followedUsers: [],
  errors: [],
  followees: []
}, action) {
  switch (action.type) {
    case 'LOADING_GREATS':
      return {...state, loading: true}
    case 'FETCH_GREATS':
      return {
        loading: false,
        greats: action.payload,
        errors: []
      }
    case 'LIKING_USER_GREAT':
      return {...state, loading: true}
    case 'LIKE_USER_DAILY_GREAT':
      return {
        loading: false,
        ...state,
        likes: [action.payload],
        errors: [action.payload.errors]
      }
    case 'LOADING_LIKES':
      return {...state, loading: true}
    case 'FETCH_USER_LIKES':
     return {
       loading: false,
       likes: action.payload,
       errors: []}
    case 'FOLLOWING_USER':
      return {...state, loading: true}
    case 'FOLLOW_USER':
     return {
       loading: false,
       ...state,
       followedUsers: [action.payload],
       errors: [action.payload.errors]
     }
    case 'LOADING_USERS':
      return {...state, loading: true}
    case 'FETCH_FOLLOWED_USERS':
     return {
       loading: false,
       followedUsers: action.payload
     }
    case 'LOADING_FOLLOWEES':
      return {...state, loading: true}
    case 'FETCH_FOLLOWEES':
      return {
        loading: false,
        followees: action.payload,
        errors: [action.payload.errors]
      }
    default:
      return state;
  }
};
