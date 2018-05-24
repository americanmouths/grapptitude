import React from 'react';

const AllGreats = ({greats}) => {

const allGreats = greats.map((great, index) => {
  return <div key={index} className="daily-great-all">{great.user.username} says: <p>{great.content}</p></div>
})
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">{allGreats}</div>
      <div className="col-md-4"></div>
    </div>
  )
}

export default AllGreats;
