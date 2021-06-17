import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonToggle,
} from "reactstrap";
import { LOGIN_CONSTANTS } from "../redux/actions/loginActions/actionTypes";

function NavbarComponent(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    history.push("/login");
  };
  return (
    <div>
      <Navbar color="success" dark expand="md">
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink color="dark" href="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink color="dark" href="/dashboard/user">
                User Details
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <ButtonToggle onClick={onLogout} className=" float-end" color="dark">
          Logout
        </ButtonToggle>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
