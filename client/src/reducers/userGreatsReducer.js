export default function userGreatsReducer(state = {
  loading: false,
  userGreats: []
}, action) {
  switch (action.type) {
    case 'LOADING_USER_DAILY_GREATS':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_USER_DAILY_GREATS':
      return {
        loading: false,
        userGreats: action.payload
      }
    case 'ADDING_NEW_USER_GREAT':
      return {
        ...state,
        loading: true
      }
    case 'ADD_USER_DAILY_GREAT':
      return {
        loading: false,
         ...state,
         userGreats: [action.payload, ...state.userGreats]
       }
    case 'DELETING_USER_GREAT':
      return {
        ...state,
        loading: true
      }
    case 'DELETE_USER_DAILY_GREAT':
      return {
        loading: false,
        ...state,
        userGreats: action.payload
      }
    default:
      return state;
  }
};
