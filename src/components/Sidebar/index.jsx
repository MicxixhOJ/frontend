import React from "react";
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const logout = () => {
    sessionStorage.removeItem("user")
  }
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="discover"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to="/dashboard"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Dashboard
          </SidebarLink>

          {user ? null : (
            <SidebarLink
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggle}
            >
              Sign Up
            </SidebarLink>
          )}
        </SidebarMenu>
        <SideBtnWrap onClick={logout}>
          {user ? (
            <SidebarRoute to="/">Log Out</SidebarRoute>
          ) : (
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
