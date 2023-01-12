import React from "react";
import styled from "styled-components";
import { useViewport } from "../hook";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";

const SearchMovie = () => {
  const dispatch = useDispatch();

  const { SearchMovie } = useSelector((state) => state.infoMovie);
  const [windowWidth] = useViewport();

  const handleMovieDetail = (movie) => {
    dispatch(setMovieDetail({ isActive: true, movie: movie }));
  };

  return (
    <BoxSearchMovie>
      {SearchMovie && SearchMovie.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            } , auto)`,
          }}>
          {SearchMovie?.map((movie, index) => (
            <div
              className="movieItem"
              key={index}
              onClick={() => handleMovieDetail(movie)}>
              <img
                src={
                  `https://image.tmdb.org/t/p/original/${movie.poster_path} ` ||
                  `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                }
                alt="đang cập nhật"
              />
              <span>{movie?.name || movie?.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <NotFound>
          <h1>Your search for "key" did not have any</h1>
        </NotFound>
      )}
    </BoxSearchMovie>
  );
};

export default SearchMovie;

const BoxSearchMovie = styled.div`
  background: black;
  padding-top: 80px;
  width: 100%;
  min-height: 92vh;
  transition: all 0.3s linear;

  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;

    &:hover .movieItem {
      opacity: 0.7;
    }

    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.2);
        opacity: 1;
        z-index: 10;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;

const NotFound = styled.div`
  padding: 8rem;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;
