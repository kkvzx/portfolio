import React, { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import {
  HeaderWrapper,
  NavLogo,
  NavMenu,
  MobileIcon,
  NavItem,
  NavLinks,
  OutsideLinks,
  SingleOutsideLink,
  LogoWrapper,
} from "./HeaderElements";
import Sidebar from "../Sidebar";

type HeaderProps = {
  toggle: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <NavLogo>
        <LogoWrapper to="/">kkvzx</LogoWrapper>
      </NavLogo>
      <MobileIcon>
        <FaBars onClick={() => props.toggle()} />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
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
            offset={50}
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
            offset={50}
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
            offset={50}
            duration={500}
          >
            Contact
          </NavLinks>
        </NavItem>
      </NavMenu>

      <OutsideLinks>
        <SingleOutsideLink>
          <FaGithub />
        </SingleOutsideLink>
        <SingleOutsideLink>
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
