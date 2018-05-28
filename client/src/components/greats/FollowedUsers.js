import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap/lib';

const FollowedUsers = ({users}) => {

  const followedUsers = users.map((great, index) => {
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author">
            <div className="btn-toolbar">
              <Glyphicon glyph="user" /> {great.user.username}
            </div>
          </div>
          <div className="Daily-Great-Created">
            <div className="btn-toolbar">
              <Glyphicon glyph="calendar" /> {great.date_created}
            </div>
          </div>
        </div>
        <p className="Daily-Great-Content">
          {great.content}
        </p>
      </div>
    )
  })

  return(
    <div>
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>Things users you are following are greatful for...</h1>
          </div>
        </div>
      </div>
      {followedUsers}
    </div>
  )
}

export default FollowedUsers;
