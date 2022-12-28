import React from "react";
import Intro from "../../Intro/Intro";
import Content from "../../Content/Content";
import Menus from "../../Menus/Menus";
import { MovieDetail } from "../../MovieDetail/MovieDetail";

const Home = () => {
  return (
    <div>
      <Intro />
      <Content />
      <Menus />
      <MovieDetail />
    </div>
  );
};

export default Home;
