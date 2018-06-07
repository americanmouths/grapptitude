import React, {Component} from 'react';
import { connect } from 'react-redux'
import { logoutUser } from './../actions/userAuthorization'
import { Navbar, Nav, NavItem, Modal } from 'react-bootstrap/lib'
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
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/main">All</NavItem>
          <NavItem eventKey={2} href="/following">Following</NavItem>
          <NavItem eventKey={3} href="/followees">Followees</NavItem>
          <NavItem eventKey={3} href="/daily_great/liked">Liked</NavItem>
          <NavItem eventKey={4} href="/daily_great/new">New</NavItem>
          <NavItem eventKey={5} href="#" onClick={this.handleShow}>Daily Mindful</NavItem>
          <NavItem eventKey={6} href="/" onClick={() => this.logout()}>Log Out</NavItem>
        </Nav>
      </Navbar.Collapse>
    )

    const guestNav = (
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/main">Main</NavItem>
          <NavItem eventKey={2} href="#" onClick={this.handleShow}>Daily Mindful</NavItem>
          <NavItem eventKey={3} href="/signup">Sign Up</NavItem>
          <NavItem eventKey={4} href="/login">Login</NavItem>
        </Nav>
      </Navbar.Collapse>
    )

    return(
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              {userName ? <Greeting /> : <p>Grapptitude</p>}
            </Navbar.Brand>
            <Navbar.Toggle />
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
