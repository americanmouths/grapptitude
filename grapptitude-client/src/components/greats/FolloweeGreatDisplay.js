import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';
import { FolloweeDateCreated, DailyGreatContent, FolloweeGreats } from '../../theme/style';

const FolloweeGreatDisplay = ({followee}) => {

  const followeeGreats = followee.map((daily_great, index) => {
    return (
      <div key={index}>
        <FolloweeGreats>
          <FolloweeDateCreated>
            <Glyphicon glyph="calendar" /> {daily_great.date_created}
          </FolloweeDateCreated>
        <DailyGreatContent>
          {daily_great.content}
        </DailyGreatContent>
      </FolloweeGreats>
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
