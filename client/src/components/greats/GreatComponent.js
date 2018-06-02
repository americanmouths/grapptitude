import React from 'react';
import { Glyphicon } from 'react-bootstrap/lib';
import { GreatContainer, Author, DateCreated, DailyGreatContent } from '../../theme/style';

const GreatComponent = ({great}) => {

    return (
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
    )
  }

export default GreatComponent;
