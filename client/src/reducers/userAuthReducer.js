export function userAuthReducer(state = {
  currentUser: {},
  token: null,
  isLoading: false,
  errors: {}
}, action) {
  switch (action.type) {
    case 'LOADING_AUTH_REQ':
      return {...state, isLoading: true}
    case 'SIGN_UP':
      return setUser(state, action.JSON)
    case 'LOG_IN':
      return setUser(state, action.JSON)
    case 'LOG_OUT':
      localStorage.clear();
      return state;
    default:
      return state;
  }
};

function setUser(state, json) {
  if (json.token) {
    localStorage.setItem('token', json.token);
    localStorage.setItem('username', json.user.username);
    localStorage.setItem('id', json.user.id);
  }
  return {...state,
    currentUser: json.user,
    token: json.token,
    errors: json.errors,
    isLoading: false
  };
}
