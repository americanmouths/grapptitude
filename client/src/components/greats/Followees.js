import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';
import FolloweeGreatDisplay from './FolloweeGreatDisplay';

const Followees = (props) => {
  
  const hasFollowees = props.followees && props.followees.length >= 1
  const noFollowees = (
      <div className="No-Followed-Users">
        <p>Looks like no one follows you yet...</p>
      </div>
    )
  const hasErrors = props.errors && props.errors.length >= 1;
  const errors = (
    <p className="Great-Errors">{props.errors[0]}</p>
  )

  const userFollowees = props.followees.map((followee, index) => {
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author btn-toolbar">
            <Glyphicon glyph="user" /> {followee.username}
          </div>
          <div className="Daily-Great-Created btn-toolbar">
            <a href="#" onClick={() => props.followFollowee(followee.id)}><Glyphicon glyph="plus" />Follow</a>
          </div>
        </div>
        <p className="Daily-Great-Content">
          <FolloweeGreatDisplay followee={followee.daily_greats} />
        </p>
      </div>
    )
  })

  return (
    <div>
      <div className="App-header">
        <h1>People following you...</h1>
      </div>
      {hasErrors ? errors : null}
      {hasFollowees ? userFollowees : noFollowees}
    </div>
  )
}

export default Followees;
