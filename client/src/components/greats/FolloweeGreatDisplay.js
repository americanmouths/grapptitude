import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';

const FolloweeGreatDisplay = ({followee}) => {

  const followeeGreats = followee.map((daily_great, index) => {
    return (
      <div key={index} className="Daily-Great-Container">
              {daily_great.content}
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
