import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';

const FolloweeGreatDisplay = ({followee}) => {

  const followeeGreats = followee.map((daily_great, index) => {
    return (
      <div key={index} className="Followee-Daily-Greats">
        <div className="Daily-Great-Created btn-toolbar">
          <Glyphicon glyph="calendar" /> {daily_great.date_created}
        </div>
        <div className="Daily-Great-Content">
          <p>{daily_great.content}</p>
        </div>
      </div>
    )
  })

  return(
    <div>
      {followeeGreats}
    </div>
  )
}

export default FolloweeGreatDisplay;
