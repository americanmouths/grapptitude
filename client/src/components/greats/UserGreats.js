import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap/lib'

const UserGreats = (props) => {
  const allUserGreats = props.userGreats.map((great, index) => {
    const id = great.id
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author">
            </div>
          </div>

          <div className="Daily-Great-Created">
            <div className="btn-toolbar">
              <Glyphicon glyph="calendar" /> {great.date_created}
            </div>
          </div>

        <p className="Daily-Great-Content">{great.content}</p>
        <button className="btn btn-primary btn-xs" onClick={() => props.deleteUserGreat(id)}>Delete</button>
      </div>
    )
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
