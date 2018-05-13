import React, { Component } from 'react';

const DailyMindfuls = ({mindfuls}) => {

  const dailyMindfuls = mindfuls.map((mindful, index) => {
    return <li key={index}>{mindful.content}</li>
  })

  return(
    <div>
    {dailyMindfuls}
    </div>
  )
}

export default DailyMindfuls;
