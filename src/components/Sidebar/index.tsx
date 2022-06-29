import React from "react";
import { FaBars, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import {
  NavLogo,
  OutsideLinks,
  SingleOutsideLink,
  HeaderLogo,
} from "../Header/HeaderElements";
import {
  ClosingIcon,
  ContentWrapper,
  LogoWrap,
  MobileIcon,
  SidebarLogo,
  SidebarMenu,
  SidebarWrapper,
  SideItem,
  SideLinks,
} from "./SidebarElements";

type NavMobileMenuProps = {
  toggle: () => void;
  isOpen: boolean;
};

const Sidebar = (props: NavMobileMenuProps) => {
  return (
    <SidebarWrapper>
      <MobileIcon>
        <FaBars onClick={() => props.toggle()} />
      </MobileIcon>
      <ContentWrapper isOpen={props.isOpen} onClick={() => props.toggle()}>
        <ClosingIcon></ClosingIcon>
        <SidebarLogo>
          <LogoWrap>
            <HeaderLogo src="https://i.imgur.com/V83tec7.png" />
          </LogoWrap>
        </SidebarLogo>
        <SidebarMenu>
          <SideItem>
            <SideLinks to="hero" onClick={() => props.toggle()}>
              Start Page
            </SideLinks>
          </SideItem>
          <SideItem>
            <SideLinks to="about" onClick={() => props.toggle()}>
              About Me
            </SideLinks>
          </SideItem>
          <SideItem>
            <SideLinks to="projects" onClick={() => props.toggle()}>
              My Portfolio
            </SideLinks>
          </SideItem>
          <SideItem>
            <SideLinks to="contact" onClick={() => props.toggle()}>
              Contact
            </SideLinks>
          </SideItem>
        </SidebarMenu>

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
      </ContentWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
