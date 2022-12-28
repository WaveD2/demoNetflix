import * as Types from "../actions/type";

const initialState = {
  Netflix: null,
  DocNetflix: null,
  ActionNetflix: null,
  ComedyNetflix: null,
  HorrorNetflix: null,
  TrendingNetflix: null,
  TopNetflix: null,
  SearchMovie: null,
  isMovieDetail: {
    isActive: false,
    movie: null,
  },
};

const reducerMovie = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_NETFLIX:
      return { ...state, Netflix: payload };

    case Types.GET_TRENDING_NETFLIX:
      return { ...state, TrendingNetflix: payload };

    case Types.GET_ACTION_NETFLIX:
      return { ...state, ActionNetflix: payload };

    case Types.GET_COMEDY_NETFLIX:
      return { ...state, ComedyNetflix: payload };

    case Types.GET_TOP_NETFLIX:
      return { ...state, TopNetflix: payload };

    case Types.GET_DOCUMENT_NETFLIX:
      return { ...state, DocNetflix: payload };

    case Types.GET_HORROR_NETFLIX:
      return { ...state, HorrorNetflix: payload };

    case Types.GET_MOVIE_SEARCH:
      return { ...state, SearchMovie: payload };

    case Types.SET_MOVIE_DETAIL:
      return { ...state, isMovieDetail: payload };

    default:
      return state;
  }
};

export default reducerMovie;
