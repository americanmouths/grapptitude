import React from 'react';

const UserGreats = (props) => {
  const allUserGreats = props.userGreats.map((great, index) => {
    const id = great.id
    return <div><p key={index} className="daily-great-all">{great.content}<br /><button onClick={() => props.deleteUserGreat(id)}>Delete</button></p></div>
  })

  return(
    <div>
    {allUserGreats}
    </div>
  )
}

export default UserGreats;
