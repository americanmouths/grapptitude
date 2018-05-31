import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap/lib';
import { GreatContainer, Author, DateCreated, DailyGreatContent } from '../../theme/style';

const AllGreats = (props) => {

  const hasErrors = props.errors && props.errors.length >= 1;
  const errors = (
    <p className="Great-Errors">{props.errors[0]}</p>
  )
  const loggedIn = !!localStorage.getItem("token")

  const mainGreats = props.greats.map((great, index) => {
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

  const userGreats = props.greats.map((great,index) => {
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
          <Button bsSize="small" onClick={() => props.likeUserGreat(great.id)}><Glyphicon glyph="thumbs-up" /> Like</Button>
          <Button bsSize="small" onClick={() => props.followUser(great.user_id)}><Glyphicon glyph="user" /> Follow</Button>
        </GreatContainer>
      </div>
  )
})

    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">{hasErrors ? errors : null} {loggedIn ? userGreats : mainGreats}</div>
        <div className="col-md-4"></div>
      </div>
    )
}

export default AllGreats;
