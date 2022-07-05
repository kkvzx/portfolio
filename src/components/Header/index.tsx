import React, { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import {
  HeaderWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  OutsideLinks,
  SingleOutsideLink,
  HeaderLogo,
} from "./HeaderElements";
import Sidebar from "../Sidebar";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLogo>
        <HeaderLogo src="https://i.imgur.com/V83tec7.png" />
      </NavLogo>

      <NavMenu>
        <NavItem>
          <NavLinks
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Start Page
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About Me
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            My Portfolio
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </NavLinks>
        </NavItem>
      </NavMenu>

      <OutsideLinks>
        <SingleOutsideLink href="https://github.com/kkvzx" target="_blank">
          <FaGithub />
        </SingleOutsideLink>
        <SingleOutsideLink
          href="https://www.linkedin.com/in/konrad-kazusek-630b1716a/"
          target="_blank"
        >
          <FaLinkedin />
        </SingleOutsideLink>
        <SingleOutsideLink>
          <FaMoon />
        </SingleOutsideLink>
        <SingleOutsideLink>
          <FaSun />
        </SingleOutsideLink>
      </OutsideLinks>
    </HeaderWrapper>
  );
};

export default Header;

// TODO SIDEBAR MENU - PROJECT SEGMENT - WORKING CONTACT FORM - REACT ROUTER
