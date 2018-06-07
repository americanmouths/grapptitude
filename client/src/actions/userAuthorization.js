export function signUpUser(signUpData) {
  const request = JSON.stringify(signUpData);

  return (dispatch) => {
    dispatch({type: "LOADING_AUTH_REQ"});
    return fetch("/api/signup", {
      method: "post",
      body: request,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(user => { dispatch({
        type: "SIGN_UP",
        payload: user
      });
    });
  }
}

export function loginUser(loginData) {
  const request = JSON.stringify(loginData);

  return (dispatch) => {
    dispatch({type: "LOADING_AUTH_REQ"});
    return fetch("/api/login", {
      method: "post",
      body: request,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(user => { dispatch({
        type: "LOG_IN",
        payload: user
      });
    });
  }
}

export function logoutUser() {
  return {type: 'LOG_OUT'};
}
