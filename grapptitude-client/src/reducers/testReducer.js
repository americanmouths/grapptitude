export default function testReducer(state = {
  loading: false,
  dailygreats: []
}, action) {
  switch (action.type) {
    case 'TEST_LIKING_USER_GREAT':
      return {
      ...state,
      loading: true
    }
    case 'TEST_LIKE_USER_DAILY_GREAT':
      return Object.assign({}, state, {
        dailygreats:
        state.dailygreats.map((great, index) => great.id === action.payload.id ? action.payload : great)
        })
      case 'TEST_FETCHING_FOLLOWED_USERS':
        return {
          ...state,
          loading: true
        }
      case 'TEST_FETCH_FOLLOWED_USERS':
      return {
        ...state,
        loading: false,
        dailygreats: action.payload
      }
    default:
    return state;
  }
}
