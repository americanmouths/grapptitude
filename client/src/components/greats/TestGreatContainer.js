import React from 'react';
import { Glyphicon } from 'react-bootstrap/lib';
import { GreatContainer, Author, DateCreated, DailyGreatContent, HeaderStyle } from '../../theme/style';

const TestGreatContainer = (props) => {

  const testGreats = props.users.map((great, index) => {
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
          {great.content}
        </DailyGreatContent>
        <button className="like" onClick={() => props.like(great.id)}><Glyphicon glyph="thumbs-up" /> Like</button>
        <span style={{color: 'pink'}}>{great.likers_count}</span>
      </GreatContainer>
    </div>
    )
  })

    return (
      <div>
        <HeaderStyle>
          <h1>Users you are following are greatful for...</h1>
        </HeaderStyle>
        {testGreats}
      </div>
    )
  }

export default TestGreatContainer;
