import React from 'react';

const UserGreats = ({userGreats}) => {
  const allUserGreats = userGreats.map((great, index) => {
    return <p key={index} className="daily-great-all">{great.content}</p>
  })

  return(
    <div>
    {allUserGreats}
    </div>
  )
}

export default UserGreats;
