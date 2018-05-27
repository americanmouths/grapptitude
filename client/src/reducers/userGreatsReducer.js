export default function userGreatsReducer(state = {
  loading: false,
  userGreats: [],
  userLikes: []
}, action) {
  switch (action.type) {
    case 'FETCH_USER_DAILY_GREATS':
      return {
        loading: false,
        userGreats: action.payload
      }
    case 'ADD_USER_DAILY_GREAT':
      return {
        loading: false,
         ...state,
         userGreats: [action.payload, ...state.userGreats]
       }
    case 'DELETE_USER_DAILY_GREAT':
      return {
        loading: false,
        ...state,
        userGreats: action.JSON
      }
    case 'LIKE_USER_DAILY_GREAT':
      return {
        loading: false,
        ...state,
        userLikes: action.JSON
      }
    default:
      return state;
  }
};
