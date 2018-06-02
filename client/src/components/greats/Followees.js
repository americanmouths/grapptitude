import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';
import FolloweeGreatDisplay from './FolloweeGreatDisplay';
import { GreatContainer, FolloweeAuthor, Errors, HeaderStyle, NoFolloweeUsers } from '../../theme/style';

const Followees = (props) => {

  const hasFollowees = props.followees && props.followees.length >= 1
  const hasErrors = props.errors && props.errors.length >= 1;
  const errors = (
    <Errors>{props.errors[0]}</Errors>
  )

  const noFollowees = (
    <NoFolloweeUsers>
      Looks like no one follows you yet...
      <br />
      <br />
      <a href="/main"><button>All</button></a>
    </NoFolloweeUsers>
    )

  const userFollowees = props.followees.map((followee, index) => {
    return (
      <div key={index}>
        <GreatContainer>
          <FolloweeAuthor>
            <Glyphicon glyph="user" /> {followee.username}
          </FolloweeAuthor>
          <a href="#" onClick={() => props.followFollowee(followee.id)}><Glyphicon glyph="plus" />Follow</a>
          <FolloweeGreatDisplay followee={followee.daily_greats} />
        </GreatContainer>
      </div>
    )
  })

  return (
    <div>
      <HeaderStyle>
        <h1>People following you...</h1>
      </HeaderStyle>
      {hasErrors ? errors : null}
      {hasFollowees ? userFollowees : noFollowees}
    </div>
  )
}

export default Followees;
