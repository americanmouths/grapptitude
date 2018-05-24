import React from 'react';

const UserGreats = (props) => {
  const allUserGreats = props.userGreats.map((great, index) => {
    const id = great.id
    return <div><p key={index} className="daily-great-all">{great.content}<br /><button onClick={() => props.deleteUserGreat(id)}>Delete</button></p></div>
  })

  return(
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="Past-Thankful">
          <br />
          In the past you were thankful for... <br />
        </div>
        {allUserGreats}
      </div>
      <div className="col-md-4"></div>
    </div>
  )
}

export default UserGreats;
