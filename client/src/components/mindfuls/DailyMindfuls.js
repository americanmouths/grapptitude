import React from 'react';

const DailyMindfuls = ({mindfuls}) => {

  return (
    <div>
      <p>Today you should try to {mindfuls.content}</p>
    </div>
  )
}

export default DailyMindfuls;
