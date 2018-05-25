import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap/lib'

const AllGreats = ({greats}) => {

  const loggedIn = !!localStorage.getItem("token")

  const mainGreats = greats.map((great, index) => {
    return <div key={index} className="daily-great-all"><p className="Daily-Great-Intro">On {great.date_created} {great.user.username} says: </p><p>{great.content}</p></div>
  })

  const userGreats = greats.map((great,index) => {
    return <div key={index} className="daily-great-all"><p className="Daily-Great-Intro">On {great.date_created} {great.user.username} says: </p><p>{great.content}</p><div className="btn-toolbar"><Button bsSize="small"><Glyphicon glyph="thumbs-up" /> Like</Button><Button bsSize="small"><Glyphicon glyph="user" /> Follow</Button></div></div>
  })

    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">{loggedIn ? userGreats : mainGreats}</div>
        <div className="col-md-4"></div>
      </div>
    )
}

export default AllGreats;
