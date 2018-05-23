import React, {Component} from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { logoutUser } from './../actions/userAuthorization'
import { Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap/lib'
import { Mindfuls } from './../containers/Mindfuls';

class NavBar extends Component {

  logout(event){
    this.props.logoutUser();
  }

  render(){

    const loggedIn = !!localStorage.getItem("token")

    const userNav = (
      <Nav pullRight>
        <NavItem eventKey={1} href="/">Main</NavItem>
        <NavItem eventKey={2} href="/calendar">Calendar</NavItem>
        <NavItem eventKey={3} href="/search">Search</NavItem>
        <NavItem eventKey={4} href="/" onClick={this.logout.bind(this)}>Log Out</NavItem>
        <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={5.1}>Action</MenuItem>
          <MenuItem eventKey={5.2}>Another action</MenuItem>
          <MenuItem eventKey={5.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={5.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    )

    const guestNav = (
      <Nav pullRight>
        <NavItem eventKey={1} href="/signup">Sign Up</NavItem>
        <NavItem eventKey={2} href="/login">Login</NavItem>
      </Nav>
    )

    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <div className="mindful-header">
                <Mindfuls />
              </div>
            </Navbar.Brand>
          </Navbar.Header>
            {loggedIn ? userNav : guestNav}
        </Navbar>
      </div>
    )
  }

}

function mapStateToProps(state){
  return { user: state.userAuth.currentUser }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
