import React, { useState, useRef } from "react";
import styled from "styled-components";
import { icons } from "../../util/icons";
import { ScrollingRow } from "../../util/fn";
import { useEffect } from "react";
import { useViewport } from "../hook";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";

const { AiOutlineLeft, AiOutlineRight } = icons;

const MovieContent = (props) => {
  const { movies, title, isNetflix, idSection } = props;
  const dispatch = useDispatch();

  const sliderRef = useRef();
  const movieRef = useRef();
  const [isDrag, setIsDrag] = useState(false);
  const [isMove, setIsMove] = useState();
  const [isDown, setIsDown] = useState();

  const [windowWidth] = useViewport();

  useEffect(() => {
    if (isDrag) {
      if (isMove < isDown) handleScrollRight();
      if (isMove > isDown) handleScrollLeft();
    }
  }, [isDrag, isMove, isDown]);

  const handleMovieDetail = (movie) => {
    dispatch(setMovieDetail({ isActive: true, movie: movie }));
  };

  const handleScrollRight = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth;
    const currScrollLeft = sliderRef.current.clientWidth;
    const scrollSlideLeft = maxScrollLeft - currScrollLeft;

    if (sliderRef.current.scrollLeft < scrollSlideLeft) {
      ScrollingRow(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      ScrollingRow(
        sliderRef.current,
        250,
        -(movieRef.current.clientWidth * 2),
        sliderRef.current.scrollLeft
      );
    }
  };

  const onDragStart = (e) => {
    setIsDrag(true);
    setIsDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setIsMove(e.screenX);
  };
  return (
    <MoviesRowContainer draggable="false" id={idSection}>
      <h1 className="heading">{title}</h1>
      <MoviesSlider
        ref={sliderRef}
        draggable="true"
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length}
              ,${
                windowWidth > 1200
                  ? "360px"
                  : windowWidth > 992
                  ? "300px"
                  : windowWidth > 768
                  ? "250px"
                  : "200px"
              })`,
              }
            : {}
        }
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}>
        {movies &&
          movies?.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imgUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  ref={movieRef}
                  draggable="false"
                  onClick={() => handleMovieDetail(movie)}>
                  <img src={imgUrl} alt="img" draggable="false" />
                  <div className="movieName">{movie?.title || movie?.name}</div>
                </div>
              );
            }
          })}
      </MoviesSlider>
      <div
        className={`btnLeft btn ${isNetflix && "isNetflix"}`}
        onClick={handleScrollLeft}>
        <AiOutlineLeft />
      </div>
      <div
        className={`btnRight btn ${isNetflix && "isNetflix"}`}
        onClick={handleScrollRight}>
        <AiOutlineRight />
      </div>
    </MoviesRowContainer>
  );
};

export default MovieContent;

const MoviesRowContainer = styled.div`
  background-color: black;
  color: var(--color-white);
  padding: 20px 20px 0;
  width: 100%;
  height: 100%;
  position: relative;

  .heading {
    font-size: 18px;
    user-select: none;
  }
  .btn {
    position: absolute;
    top: 45%;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 12px 6px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 30px;
    transition: all 0.4s linear;
    &:hover {
      background-color: rgba(59, 57, 57, 0.5);

      svg {
        color: #000000;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: 28px;
      padding: 10px 5px;
      top: 50%;
    }
  }
  .isNetflix {
    padding: 18px 9px;
    top: 45%;
  }
  .btnLeft {
    left: 24px;
  }
  .btnRight {
    right: 24px;
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  /* grid-template-columns :repeat(); */
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow: hidden;
  padding: 28px 0;
  scroll-behavior: smooth;

  &:hover .movieItem{
    opacity:0.5;
  }

  .movieItem {
    transform : scale(1);
    max-width: 400px;
    max-height: 500px;
    width:100%;
    height : 100%:
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius : 6px;
    transform : center left ;
    position: relative; 

  &:hover {
    opacity:1;
    transform : scale(1.1);
    z-index:10;
  }
  
  img {
    width:100%;
    height:100%;
    object-fit: fill;
    border-radius : 6px;

    }
  .movieName {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding : 4px;
    text-align : center ;
    font-size : 14px;
    background-color : rgba(0 , 0,0,0.65)
    }
  }
`;
