import React, { Component } from 'react';

const DailyGreats = ({greats}) => {

const dailyGreats = greats.map((great, index) => {
  return <p key={index} className="daily-great-all">{great.content} - {great.user_id}</p>
})
  return(
    <div>
      <div>
          {dailyGreats}
      </div>
    </div>
  )
}

export default DailyGreats;
