import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../actions/userAuthorization'

class NavBar extends React.Component {

  logout(event){
    this.props.logoutUser();
  }

  render(){
    return(
      <div>
        <NavLink className="item" to="/signup"> Sign Up </NavLink> ||
        <NavLink className="item" to="/login"> Log In </NavLink> ||
        <NavLink className="item" to="/" onClick={this.logout.bind(this)}> Log Out</NavLink>
      </div>
    )
  }

}


export default NavBar;
