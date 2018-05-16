import React, { Component } from 'react';

const Main = ({userGreats}) => {

  const allUserGreats = userGreats.map((index, great) => {
    return <p key={index}>{great.content}</p>
  })

  return(
    <div>
    {allUserGreats}
    </div>
  )
}

export default Main;
