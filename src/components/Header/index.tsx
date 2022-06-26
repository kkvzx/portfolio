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
          <NavLinks to="about">About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="projects">My Skills</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="resume">Work</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="resume">Contact</NavLinks>
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
