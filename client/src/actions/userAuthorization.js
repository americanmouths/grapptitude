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
      .then(JSON => { dispatch({
        type: "SIGN_UP",
        JSON: JSON
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
      .then(JSON => { dispatch({
        type: "LOG_IN",
        JSON: JSON
      });
    });
  }
}

export function logoutUser() {
  return {type: 'LOG_OUT'};
}
