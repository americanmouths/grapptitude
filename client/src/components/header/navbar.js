import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {
  render(){
    return(
      <div>
        <NavLink className="item" to="/signup">Sign Up</NavLink>
      </div>
    )
  }

}


export default NavBar;
