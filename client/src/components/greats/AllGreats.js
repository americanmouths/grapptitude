import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap/lib'

const AllGreats = ({greats}) => {

  const loggedIn = !!localStorage.getItem("token")

  const mainGreats = greats.map((great, index) => {
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author">
            <div className="btn-toolbar">
              <Glyphicon glyph="user" /> {great.user.username}
            </div>
          </div>
          <div className="Daily-Great-Created">
            <div className="btn-toolbar">
              <Glyphicon glyph="calendar" /> {great.date_created}
            </div>
          </div>
        </div>
        <p className="Daily-Great-Content">
          {great.content}
        </p>
      </div>
    )
  })

  const userGreats = greats.map((great,index) => {
    return (
      <div key={index} className="Daily-Great-Container">
        <div className="All-Greats-Header">
          <div className="Daily-Great-Author">
            <div className="btn-toolbar">
              <Glyphicon glyph="user" /> {great.user.username}
            </div>
          </div>
          <div className="Daily-Great-Created">
            <div className="btn-toolbar">
              <Glyphicon glyph="calendar" /> {great.date_created}
            </div>
          </div>
        </div>
        <p className="Daily-Great-Content">
          {great.content}
        </p>
      <div className="btn-toolbar">
        <Button bsSize="small"><Glyphicon glyph="thumbs-up" /> Like</Button>
        <Button bsSize="small"><Glyphicon glyph="user" /> Follow</Button>
      </div>
    </div>
  )
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
