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
        ...state,
        loading: false,
        greats: action.payload
      }
    case 'LIKING_USER_GREAT':
      return {...state, loading: true}
    case 'LIKE_USER_DAILY_GREAT':
      return {
        ...state,
        loading: false,
        errors: action.payload.errors
      }
    case 'LOADING_LIKES':
      return {...state, loading: true}
    case 'FETCH_USER_LIKES':
     return {
       ...state,
       loading: false,
       likes: action.payload
     }
    case 'FOLLOWING_USER':
      return {...state, loading: true}
    case 'FOLLOW_USER':
     return {
       ...state,
       loading: false,
       errors: action.payload.errors
     }
    case 'LOADING_USERS':
      return {...state, loading: true}
    case 'FETCH_FOLLOWED_USERS':
     return {
       ...state,
       loading: false,
       followedUsers: action.payload
     }
    case 'LOADING_FOLLOWEES':
      return {...state, loading: true}
    case 'FETCH_FOLLOWEES':
      return {
        ...state,
        loading: false,
        followees: action.payload,
        errors: action.payload.errors
      }
    default:
      return state;
  }
}
