import React, {Component} from 'react';
import { connect } from 'react-redux'
import { logoutUser } from './../actions/userAuthorization'
import { Navbar, Nav, NavItem, Modal } from 'react-bootstrap/lib';
import { LinkContainer } from 'react-router-bootstrap';
import { Mindfuls } from './../containers/Mindfuls';
import Greeting from './../components/headers/Greeting';

class NavBar extends Component {
  constructor () {
    super();

    this.state = {
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true});
  }

  logout(){
    this.props.logoutUser();
  }

  render(){

    const loggedIn = !!localStorage.getItem("token")
    const userName = localStorage.getItem("username")

    const userNav = (
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/main"><NavItem eventKey={1} exact={true}>All</NavItem></LinkContainer>
          <LinkContainer to="/following"><NavItem eventKey={2}>Following</NavItem></LinkContainer>
          <LinkContainer to="/followees"><NavItem eventKey={3}>Followees</NavItem></LinkContainer>
          <LinkContainer to="/daily_great/liked"><NavItem eventKey={3}>Liked</NavItem></LinkContainer>
          <LinkContainer to="/daily_great/new"><NavItem eventKey={4}>New</NavItem></LinkContainer>
          <LinkContainer to="#" onClick={() => this.handleShow()}><NavItem eventKey={5}>Daily Mindful</NavItem></LinkContainer>
          <NavItem eventKey={6} href="/" onClick={() => this.logout()}>Log Out</NavItem>
        </Nav>
      </Navbar.Collapse>
    )

    const guestNav = (
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/main"><NavItem eventKey={1} exact={true}>All</NavItem></LinkContainer>
          <LinkContainer to="#" onClick={() => this.handleShow()}><NavItem eventKey={2}>Daily Mindful</NavItem></LinkContainer>
          <LinkContainer to="/signup"><NavItem eventKey={3}>Sign Up</NavItem></LinkContainer>
          <LinkContainer to="/login" exact={true}><NavItem eventKey={4}>Login</NavItem></LinkContainer>
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

        <Modal show={this.state.show} onHide={() => this.handleClose()} className="modal-container">
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
