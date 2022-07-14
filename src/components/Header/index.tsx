import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  OutsideLinks,
  SingleOutsideLink,
  HeaderLogo,
  LinkRouter,
} from "./HeaderElements";

interface props {
  darkModeToggle: (toggle: string) => void;
  darkMode: boolean;
}

const Header = (props: props) => {
  return (
    <HeaderWrapper>
      <NavLogo>
        <HeaderLogo
          src={
            props.darkMode
              ? "https://i.imgur.com/V83tec7.png"
              : "https://i.imgur.com/csRL9uL.png"
          }
        />
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
            <LinkRouter to="/">Start Page</LinkRouter>
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
            <LinkRouter to="/">About Me</LinkRouter>
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
            <LinkRouter to="/">My Portfolio</LinkRouter>
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
            <LinkRouter to="/">Contact</LinkRouter>
          </NavLinks>
        </NavItem>
        <NavItem>
          <LinkRouter to="/resume">Resume</LinkRouter>
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
        <SingleOutsideLink onClick={() => props.darkModeToggle("dark")}>
          <FaMoon />
        </SingleOutsideLink>
        <SingleOutsideLink onClick={() => props.darkModeToggle("light")}>
          <FaSun />
        </SingleOutsideLink>
      </OutsideLinks>
    </HeaderWrapper>
  );
};

export default Header;

// TODO SIDEBAR MENU - PROJECT SEGMENT - WORKING CONTACT FORM - REACT ROUTER
