import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';

const AllUserLikes = ({likes}) => {

  const hasUserLikes = likes.length >= 1

  const userLikes = likes.map((great, index) => {
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

  const noUserLikes = (
    <div className="No-User-Likes">
      <p>Get started by liking some posts...</p>
      <a className="btn btn-primary" href="/">All</a>
    </div>
  )

  return(
    <div>
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>Posts you have liked...</h1>
          </div>
        </div>
      </div>
      {hasUserLikes ? userLikes : noUserLikes}
    </div>
  )
}

export default AllUserLikes;
