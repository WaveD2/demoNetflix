import React, { useEffect } from "react";
import MovieContent from "./MovieContent";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "../../util/icons";
import useScrollY from "../hook/useScrollY";
import { animateScroll as scroll } from "react-scroll";
import {
  getNetflixOriginals,
  getTrendingNetflix,
  getTopNetflix,
  getComedyNetflix,
  getActionNetflix,
  getDocNetflix,
  getHorrorNetflix,
} from "../store/actions";
import styled from "styled-components";

const { CgArrowUpO } = icons;

const Content = () => {
  const dispatch = useDispatch();
  const [scrollY] = useScrollY();

  const {
    Netflix,
    TrendingNetflix,
    TopNetflix,
    ComedyNetflix,
    ActionNetflix,
    HorrorNetflix,
    DocNetflix,
  } = useSelector((state) => state.infoMovie);

  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrendingNetflix());
    dispatch(getTopNetflix());
    dispatch(getComedyNetflix());
    dispatch(getActionNetflix());
    dispatch(getDocNetflix());
    dispatch(getHorrorNetflix());
  }, [dispatch]);

  const ScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <MovieContent
        movies={Netflix}
        title="Netflix Originals"
        isNetflix={true}
        idSection="Netflix"
      />
      <MovieContent
        movies={TrendingNetflix}
        title="Trending Movies"
        idSection="Trending"
      />
      <MovieContent
        movies={TopNetflix}
        title="Top Movies"
        idSection="Top Movie"
      />
      <MovieContent
        movies={ActionNetflix}
        title="Action Movies"
        idSection="News"
      />
      <MovieContent
        movies={ComedyNetflix}
        title="Comedy Movies"
        idSection="comedy"
      />
      <MovieContent
        movies={HorrorNetflix}
        title="Horror Movies"
        idSection="horror"
      />
      <MovieContent
        movies={DocNetflix}
        title="Document Movies"
        idSection="document"
      />
      <GoToTop
        onClick={() => ScrollToTop()}
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}>
        <CgArrowUpO />
      </GoToTop>
    </div>
  );
};

export default Content;

const GoToTop = styled.div`
position: fixed;
z-index :10;
right : 70px;
bottom : 50px;
font-size : 50px;
color : rgba(255 ,255 ,255 , .4);
transition: a;; .4s linear;

&:hover {
  color : rgba(255,255,255 , .8);
}

@media screen and (max-width:600px){
  right:40px;
}

`;
