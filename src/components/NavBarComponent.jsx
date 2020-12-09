import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleNavBar = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="dark" light expand="md" className="nav">
        <NavbarBrand href="/" style={{ width: "40%" }}>
          <img
            src="https://i.ibb.co/PFVmqVP/Wild-Movie-logo.png"
            alt="Wild Movie"
            className="logo"
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggleNavBar}
          style={{ background: "#b65ce7", opacity: "0.4" }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="navlink" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" href="/search">
                Search
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" href="/random">
                Random
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="navlink">
                My Profile
              </DropdownToggle>
              <DropdownMenu
                center
                style={{
                  background: "#343a40",
                  border: "none",
                }}
              >
                <DropdownItem className="dropdown" href="/myprofile/mylist">
                  My List
                </DropdownItem>
                <DropdownItem className="dropdown" href="/myprofile/settings">
                  Confidentiality
                </DropdownItem>
                <DropdownItem className="dropdown" href="/myprofile/contact">
                  Contact
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
