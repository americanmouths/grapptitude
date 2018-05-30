import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap/lib'

const AllGreats = (props) => {

  const hasErrors = props.errors && props.errors.length >= 1;
  const errors = (<p className="Great-Errors">{props.errors[0]}</p>)
  const loggedIn = !!localStorage.getItem("token")

  const mainGreats = props.greats.map((great, index) => {
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author btn-toolbar">
            <Glyphicon glyph="user" /> {great.user.username}
          </div>
          <div className="Daily-Great-Created btn-toolbar">
            <Glyphicon glyph="calendar" /> {great.date_created}
          </div>
        </div>
        <p className="Daily-Great-Content">
          {great.content}
        </p>
      </div>
    )
  })

  const userGreats = props.greats.map((great,index) => {
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author btn-toolbar">
            <Glyphicon glyph="user" /> {great.user.username}
          </div>
          <div className="Daily-Great-Created btn-toolbar">
            <Glyphicon glyph="calendar" /> {great.date_created}
          </div>
        </div>
        <p className="Daily-Great-Content">
          {great.content}
        </p>
      <div className="btn-toolbar">
        <Button bsSize="small" onClick={() => props.likeUserGreat(great.id)}><Glyphicon glyph="thumbs-up" /> Like</Button>
        <Button bsSize="small" onClick={() => props.followUser(great.id)}><Glyphicon glyph="user" /> Follow</Button>
      </div>
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
