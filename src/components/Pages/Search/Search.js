import React from "react";
import SearchMovie from "../../SearchMovie/SearchMovie";
import { MovieDetail } from "../../MovieDetail/MovieDetail";
const Search = () => {
  return (
    <div>
      <SearchMovie />
      <MovieDetail />
    </div>
  );
};

export default Search;
