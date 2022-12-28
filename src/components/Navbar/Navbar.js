import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NetflixLogo from "../../asset/lg.png";
import { icons } from "../../util/icons";
import useScrollY from "../hook/useScrollY";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams, Link } from "react-router-dom";
import { getMovieSearch } from "../store/actions";

const { FiSearch } = icons;

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scrollY] = useScrollY();
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    if (valueInput) {
      dispatch(getMovieSearch(valueInput));
      navigate({
        pathname: "search",
        search: createSearchParams({
          q: valueInput,
        }).toString(),
      });
    }
  }, [valueInput]);

  const handleSetValueInput = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "black" }
      }>
      <div className="navContainer">
        <div className="logo">
          <Link to="/">
            <img src={NetflixLogo} alt="logo" />
          </Link>
        </div>
        <div className="navSearch">
          <FiSearch size={20} className="iconSearch" />
          <input
            type="text"
            placeholder={valueInput}
            onChange={handleSetValueInput}
          />
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index : 10;

  @media only screen and (max-width: 600px) {
    height: 100px;
  }

  .navContainer {
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    .logo {
      width: 120px;
      cursor: pointer;
      img {
        object-fit: cover;
        width: 100%;
      }
    }

    .navSearch {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

        .iconSearch {
          color: var( --color-white);
          transform: translate(38px, 0px);
        }
        input {
          outline: none;
          border: none;
          padding: 6px 40px 6px 38px;
          font-size: 16px;
          border-radius: 12px;
          opacity: 0;
          transition: all 1s easy;

          &:focus {
            opacity: 1;
            cursor: text;
          }
        }
        .iconClose {
          color: var( --color-white);
          transform: translate(-38px, 0px);
        }
      }
    }
  }
`;
