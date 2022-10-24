import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavMenu,
  NavLinks,
  NavItems,
  MobileIcon,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const logout = () => {
    sessionStorage.removeItem("user")
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Uniben
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="/dashboard"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Dashboard
              </NavLinks>
            </NavItems>

            {user ? null : (
              <NavItems>
                <NavLinks
                  to="/signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItems>
            )}
          </NavMenu>


{
  user ? 
  
  <NavBtn onClick={logout}>
  <NavBtnLink to="/">Log Out</NavBtnLink>
</NavBtn>
  :


<NavBtn>
  <NavBtnLink to="/signin">Sign In</NavBtnLink>
</NavBtn>
}
         
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
