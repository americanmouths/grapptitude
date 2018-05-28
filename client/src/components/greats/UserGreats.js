import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib'

const UserGreats = (props) => {
  const allUserGreats = props.userGreats.map((great, index) => {
    const id = great.id
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">

          <div className="Daily-Great-Created">
            <div className="btn-toolbar">
              <Glyphicon glyph="calendar" /> {great.date_created}
            </div>
          </div>

          <div className="Daily-Great-Remove">
            <div className="btn-toolbar">
              <Glyphicon glyph="remove" onClick={() => props.deleteUserGreat(id)} />
            </div>
          </div>

        </div>
        <p className="Daily-Great-Content">{great.content}</p>
      </div>
    )
  })

  return(
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="Past-Thankful">
          <br />
          In the past you have been thankful for... <br />
        </div>
        {allUserGreats}
      </div>
      <div className="col-md-4"></div>
    </div>
  )
}

export default UserGreats;
