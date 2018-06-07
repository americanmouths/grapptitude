import React from 'react';

const Greeting = () => {

  const name = localStorage.getItem("username")

  return (
    <div>
      <p className="navbar-brand">Welcome {name}</p>
    </div>
  )
}

export default Greeting;
