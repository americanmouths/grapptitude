import React, { Component } from 'react';

const DailyGreats = ({greats}) => {

const dailyGreats = greats.map((great, index) => {
  return <div key={index} className="daily-great-all">{great.content} - {great.user.email}</div>
})
  return(
    <div>
      {dailyGreats}
    </div>
  )
}

export default DailyGreats;
