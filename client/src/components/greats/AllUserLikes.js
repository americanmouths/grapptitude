import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';
import { HeaderStyle, NoUserLikes, GreatContainer, Author, DateCreated, DailyGreatContent } from '../../theme/style';


const AllUserLikes = ({likes}) => {

  const hasUserLikes = likes.length >= 1

  const userLikes = likes.map((great, index) => {
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

  const noUserLikes = (
    <NoUserLikes>
      <p>Get started by liking some posts...</p>
      <a href="/main"><button>All</button></a>
    </NoUserLikes>
  )

  return(
    <div>
      <HeaderStyle>
        <h1>Posts you have liked...</h1>
      </HeaderStyle>
      {hasUserLikes ? userLikes : noUserLikes}
    </div>
  )
}

export default AllUserLikes;
