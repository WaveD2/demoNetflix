import React from "react";
import styled from "styled-components";
import { icons } from "../../util/icons";
import MenuItem from "./MenuItem";

const { IoHome, HiFire, BsStarFill, VscAccount, MdFiberNew, SiNetflix } = icons;

const ListMenu = [
  { icon: <IoHome size={24} />, text: "Home" },
  { icon: <SiNetflix size={24} />, text: "Netflix" },
  { icon: <HiFire size={24} />, text: "Trending" },
  { icon: <BsStarFill size={24} />, text: "Top Movie" },
  { icon: <MdFiberNew size={24} />, text: "News" },
  { icon: <VscAccount size={24} />, text: "Account" },
];
const Menus = () => {
  return (
    <Menu>
      {ListMenu.map((item, index) => (
        <MenuItem
          icon={item.icon}
          text={item.text}
          key={index}
          to={item.text}
        />
      ))}
    </Menu>
  );
};

export default Menus;

const Menu = styled.div`
  position: fixed;
  top: 40%;
  left: 0%;
  background: #35323268;
  z-index: 999;
  width: 44px;
  overflow: hidden;
  transition: all 0.4s linear;
  &:hover {
    width: 150px;
  }
`;
