import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {
  render(){
    return(
      <div>
        <NavLink className="item" to="/signup"> Sign Up </NavLink> ||
        <NavLink className="item" to="/login"> Log In </NavLink>
      </div>
    )
  }

}


export default NavBar;
