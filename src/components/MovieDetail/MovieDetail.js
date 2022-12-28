import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";
export const MovieDetail = () => {
  const dispatch = useDispatch();
  const { isMovieDetail } = useSelector((state) => state.infoMovie);
  const { isActive, movie } = isMovieDetail;

  let showModal = isActive;

  let imgUrl =
    `https://image.tmdb.org/t/p/original/${movie?.poster_path}` ||
    `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`;

  return (
    <MovieDetailModal>
      {isActive && (
        <>
          <div
            className={`backdrop ${
              showModal ? "showBackdrop" : "hideBackdrop"
            }`}
            onClick={() => dispatch(setMovieDetail({ isActive: false }))}></div>
          <div
            className={`modal ${showModal ? "showModal" : "hideModal"}`}
            style={{
              background: `url(${imgUrl})`,
              backgroundSize: "cover",
            }}>
            <div className="container">
              <div className="movieInfo">
                <h1 className="movieTitle">
                  {movie?.title || movie?.name || "updating..."}
                </h1>
                <p className="statics">
                  <p className="rating">
                    Rating : {movie?.vote_average * 10 || "updating..."}%
                  </p>
                  <p className="popularity">
                    Popularity : {movie?.popularity || "updating..."}
                  </p>
                </p>
                <p className="releaseDate">
                  {" "}
                  Release Date : {movie?.release_date || "updating..."}
                </p>
                <p className="overview">{movie?.overview || "updating..."}</p>
              </div>
            </div>
          </div>
          )
        </>
      )}
    </MovieDetailModal>
  );
};
const MovieDetailModal = styled.div`
    .showBackdrop{
      display : block;
    }
    .hideBackdrop{
      display : none;
    }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal {
    position: fixed;
    top: 20%;
    left: 0;
    right: 0;
    z-index: 100;
    height: 60%;
    margin: 0 auto;
    color: #fff;
    background-repeat: no-repeat; 
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7 ) ;
    transition: all 0.3s ease;
    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container{
      position: relative;
      width: :70%;
      height: 100%;
      background-image: 
      linear-gradient( 90deg , #0000009e 64% ,transparent );

        @media screen and (max-width: 1184px) {
    background-image: 
      linear-gradient( 90deg , #0000009e 40% ,transparent );
      width: :88%;

    }
    @media screen and (max-width: 600px) {
      background-image: 
      linear-gradient( 90deg , #0000009e 30% ,transparent );
      width: :100%;
    }

    .movieInfo {
      width: 65%;
      height: 100%;
      padding-left: 24px;
      color : #fff;
      font-size : 20px;
      padding-top:30px  ;
       @media screen and (max-width: 600px) {
         width: 80%;
         font-size : 16px;
          }

    .movieTitle{
      margin-top:30px ;
    }
    .statics{
      margin-top:20px ;
      display : flex;

      .rating {
        color : pink ;
      }
      .popularity {
        color : yellow ;
        margin-left : 12px;
      }
    }
    .releaseDate {
      margin-top:12px ;

    }
    .overview {
      margin-top : 20px;
      color :rgba(255 ,255 , 255, .6);
      line-height : 1.4;
      font-size : 18px;
      
         @media screen and (max-width: 600px) {
         font-size : 14px;
          }
       }
      }
    }
  }
    .showModal {
      top:25%;
      opacity: 1;
      left: 0;
      visibility:visible;
      transition: .4s ease-in-out;
    }
    .hideModal {
      top:0%;
      opacity: 0;
      visibility:hidden;
      transition: .4s ease-in-out;
    }
`;
