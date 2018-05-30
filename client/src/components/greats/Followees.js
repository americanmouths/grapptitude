import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';
import FolloweeGreatDisplay from './FolloweeGreatDisplay';

const Followees = (props) => {

  const hasFollowees = props.followees && props.followees.length >= 1

  const userFollowees = props.followees.map((followee, index) => {
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author">
            <div className="btn-toolbar">
              <Glyphicon glyph="user" /> {followee.username}
              <FolloweeGreatDisplay followee={followee.daily_greats} />
            </div>
          </div>
        </div>
      </div>
    )
  })

  const noFollowees = (
    <div className="No-Followed-Users">
      <p>Looks like no one follows you yet...</p>
    </div>
  )

  return(
    <div>
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>People following you...</h1>
          </div>
        </div>
      </div>
      {hasFollowees ? userFollowees : noFollowees}
    </div>
  )
}

export default Followees;
