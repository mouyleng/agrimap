import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { logout } from '../../actions/auth';

class NavView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Agrimap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><Button onClick={()=>this.props.onLogout()}>Logout</Button>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Setting
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Manage User
                  </DropdownItem>
                  <DropdownItem>
                    Change Password
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const structuredSelector = createStructuredSelector({
  auth: state => state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  };
};

export default connect(structuredSelector, mapDispatchToProps)(NavView);
