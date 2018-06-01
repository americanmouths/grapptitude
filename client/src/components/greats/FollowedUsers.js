import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';
import { GreatContainer, Author, DateCreated, DailyGreatContent, HeaderStyle, NoFollowedUsers } from '../../theme/style';

const FollowedUsers = ({users}) => {

  const hasFollowedUsers = users && users.length >= 1

  const followedUsers = users.map((great, index) => {
    return (
      <div key={index}>
        <GreatContainer>
          <Author>
            <Glyphicon glyph="user" /> {great.user.username}
          </Author>
          <DateCreated>
            <Glyphicon glyph="calendar" /> {great.date_created}
          </DateCreated>
          <DailyGreatContent>
            <Glyphicon glyph="grain" /> {great.content} <Glyphicon glyph="grain" />
          </DailyGreatContent>
        </GreatContainer>
      </div>
    )
  })

  const noFollowedUsers = (
    <NoFollowedUsers>
      Get started by following some users
      <br />
      <br />
      <a href="/main"><button>All</button></a>
    </NoFollowedUsers>
  )

  return(
    <div>
      <HeaderStyle>
        <h1>Your followers are greatful for...</h1>
      </HeaderStyle>
      {hasFollowedUsers ? followedUsers : noFollowedUsers}
    </div>
  )
}

export default FollowedUsers;
