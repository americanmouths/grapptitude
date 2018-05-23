import React from 'react';

const AllGreats = ({greats}) => {

const allGreats = greats.map((great, index) => {
  return <div key={index} className="daily-great-all">{great.user.username} says: <p>{great.content}</p></div>
})
  return(
    <div>
      {allGreats}
    </div>
  )
}

export default AllGreats;
