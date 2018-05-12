import fetch from 'isomorphic-fetch'

export function login(loginParams){
  const email = loginParams.email
  const password = loginParams.password
  const request = {"auth": {"email": email, "password": password}}
  console.log(request)
  return fetch("http://localhost:3001/api/user_token", {
      method: 'post',
      body: JSON.stringify(request),
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
      }
    })
    .then((res) => {
      return res.json()
    }
  )
}
