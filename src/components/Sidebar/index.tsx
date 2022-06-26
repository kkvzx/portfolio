import React from "react";
import { NavLogo } from "../Header/HeaderElements";
import {
  ClosingIcon,
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
    <SidebarWrapper isOpen={props.isOpen} onClick={() => props.toggle()}>
      <ClosingIcon></ClosingIcon>
      <SidebarMenu>
        <SideItem>
          <SideLinks to="about" onClick={() => props.toggle()}>
            About
          </SideLinks>
        </SideItem>
        <SideItem>
          <SideLinks to="projects" onClick={() => props.toggle()}>
            Projects
          </SideLinks>
        </SideItem>
        <SideItem>
          <SideLinks to="resume" onClick={() => props.toggle()}>
            Resume
          </SideLinks>
        </SideItem>
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;
