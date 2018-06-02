import React from 'react';
import { Glyphicon } from 'react-bootstrap/lib';
import { GreatContainer, Author, DateCreated, DailyGreatContent, Errors } from '../../theme/style';
import GreatComponent from './GreatComponent';

const AllGreats = (props) => {

  const hasErrors = props.errors && props.errors.length >= 1;
  const errors = <Errors>{props.errors[0]}</Errors>
  const loggedIn = !!localStorage.getItem("token")

  const mainGreats = props.greats.map((great, index) => {
    return (
      <div key={index}>
        <GreatComponent great={great} />
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
            {great.content}
          </DailyGreatContent>
          <button className="like" onClick={() => props.likeUserGreat(great.id)}><Glyphicon glyph="thumbs-up" /> Like</button>
          <button className="follow" onClick={() => props.followUser(great.user_id)}><Glyphicon glyph="user" /> Follow</button>
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
