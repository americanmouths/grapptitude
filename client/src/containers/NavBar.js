import React, {Component} from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { logoutUser } from './../actions/userAuthorization'
import { Navbar, Nav, MenuItem, NavItem, NavDropdown, Modal, Button } from 'react-bootstrap/lib'
import { Mindfuls } from './../containers/Mindfuls';
import Greeting from './../components/headers/Greeting';

class NavBar extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(event) {
    event.preventDefault();
    this.setState({ show: true});
  }

  logout(event){
    this.props.logoutUser();
  }

  render(){

    const loggedIn = !!localStorage.getItem("token")
    const userName = localStorage.getItem("username")

    const userNav = (
      <Nav pullRight>
        <NavItem eventKey={1} href="/">Main</NavItem>
        <NavItem eventKey={2} href="#" onClick={this.handleShow}>Daily Mindful</NavItem>
        <NavItem eventKey={2} href="/home">Greats</NavItem>
        <NavItem eventKey={3} href="/calendar">Calendar</NavItem>
        <NavItem eventKey={4} href="/search">Search</NavItem>
        <NavItem eventKey={5} href="/" onClick={this.logout.bind(this)}>Log Out</NavItem>
        <NavDropdown eventKey={6} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={6.1}>Action</MenuItem>
          <MenuItem eventKey={6.2}>Another action</MenuItem>
          <MenuItem eventKey={6.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={6.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    )

    const guestNav = (
      <Nav pullRight>
        <NavItem eventKey={1} href="#" onClick={this.handleShow}>Daily Mindful</NavItem>
        <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
        <NavItem eventKey={3} href="/login">Login</NavItem>
      </Nav>
    )

    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              {userName ? <Greeting /> : <p>Grapptitude</p>}
            </Navbar.Brand>
          </Navbar.Header>
            {loggedIn ? userNav : guestNav}
        </Navbar>
        <Modal show={this.state.show} onHide={this.handleClose} className="modal-container">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Mindfuls />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}

function mapStateToProps(state){
  return { user: state.userAuth.currentUser }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
