import React from "react";
import styled from "styled-components";
import { randomColor } from "../../util/fn";
import { Link } from "react-scroll";
const MenuItem = ({ icon, text, to }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-60}
      duration={500}
      activeClass="active">
      <ItemMenu>
        <span style={{ color: randomColor(1) }}> {icon}</span>
        <span className="menuText">{text}</span>
      </ItemMenu>
    </Link>
  );
};

export default MenuItem;

const ItemMenu = styled.div`
  display: flex;
  width: max-content;
  gap: 10px;
  align-items: center;
  padding: 8px;
  color: #fff;
  list-style: none;
  cursor: pointer;
  &:hover {
    width: 100%;
    background: #2e1f1fce;
  }
  span {
    font-size: 18px;
    padding-right: 4px;
  }
`;
