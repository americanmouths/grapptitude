import React from 'react';

const Greeting = (props) => {

  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4 Welcome">Welcome {props.name}, what are you thankful for today?</div>
      <div className="col-md-4"></div>
    </div>
  )
};

export default Greeting;
