import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';

const FollowedUsers = ({users}) => {

  const hasFollowedUsers = users && users.length >= 1

  const followedUsers = users.map((great, index) => {
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author btn-toolbar">
            <Glyphicon glyph="user" /> {great.user.username}
          </div>
          <div className="Daily-Great-Created btn-toolbar">
            <Glyphicon glyph="calendar" /> {great.date_created}
          </div>
        </div>
        <p className="Daily-Great-Content">
          {great.content}
        </p>
      </div>
    )
  })

  const noFollowedUsers = (
    <div className="No-Followed-Users">
      <p>Get started by following some users</p>
      <a className="btn btn-primary" href="/">All</a>
    </div>
  )

  return(
    <div>
      <div className="App-header">
        <h1>Your followers are greatful for...</h1>
      </div>
      {hasFollowedUsers ? followedUsers : noFollowedUsers}
    </div>
  )
}

export default FollowedUsers;
