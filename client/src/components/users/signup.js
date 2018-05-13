import fetch from 'isomorphic-fetch'

export function signup(signUpParams){
  const email = signUpParams.email
  const password = signUpParams.password
  const request = {"user": {"email": email, "password": password}}
  console.log(request)
  return fetch("http://localhost:3001/api/signup", {
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
