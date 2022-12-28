/* eslint-disable no-undef */
import axios from "axios";
// import { GET_NETFLIX } from "./type";
import * as Types from "./type";

const API_KEY = "ff85e9bc31195a13de8b51f9b8dc4859";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      ` ${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    console.log(result);
    dispatch({ type: Types.GET_NETFLIX, payload: result.data.results });
  } catch (error) {
    console.log("Error api netflix", error);
  }
};
// https://api.themoviedb.org/3/trending/all/day?api_key=ff85e9bc31195a13de8b51f9b8dc4859
export const getTrendingNetflix = () => async (dispatch) => {
  try {
    const result = await axios.get(
      ` ${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    dispatch({
      type: Types.GET_TRENDING_NETFLIX,
      payload: result?.data?.results,
    });
  } catch (error) {
    console.log("Error api netflix", error);
  }
};
// https://api.themoviedb.org/3/movie/top_rated?api_key=ff85e9bc31195a13de8b51f9b8dc4859&language=en-US&page=1
export const getTopNetflix = () => async (dispatch) => {
  try {
    const result = await axios.get(
      ` ${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({
      type: Types.GET_TOP_NETFLIX,
      payload: result?.data?.results,
    });
  } catch (error) {
    console.log("Error api netflix", error);
  }
};

// https://api.themoviedb.org/3/movie/popular?api_key=ff85e9bc31195a13de8b51f9b8dc4859&language=en-US&page=1
export const getComedyNetflix = () => async (dispatch) => {
  try {
    const result = await axios.get(
      ` ${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({
      type: Types.GET_COMEDY_NETFLIX,
      payload: result?.data?.results,
    });
  } catch (error) {
    console.log("Error api netflix", error);
  }
};

// https://api.themoviedb.org/3/movie/upcoming?api_key=ff85e9bc31195a13de8b51f9b8dc4859&language=en-US&page=1
export const getActionNetflix = () => async (dispatch) => {
  try {
    const result = await axios.get(
      ` ${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({
      type: Types.GET_ACTION_NETFLIX,
      payload: result?.data?.results,
    });
  } catch (error) {
    console.log("Error api netflix", error);
  }
};

// https://api.themoviedb.org/3/movie/now_playing?api_key=ff85e9bc31195a13de8b51f9b8dc4859&language=en-US&page=1
export const getHorrorNetflix = () => async (dispatch) => {
  try {
    const result = await axios.get(
      ` ${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({
      type: Types.GET_HORROR_NETFLIX,
      payload: result?.data?.results,
    });
  } catch (error) {
    console.log("Error api netflix", error);
  }
};

// https://api.themoviedb.org/3/movie/latest?api_key=ff85e9bc31195a13de8b51f9b8dc4859&language=en-US

export const getDocNetflix = () => async (dispatch) => {
  try {
    const result = await axios.get(
      ` ${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispatch({
      type: Types.GET_DOCUMENT_NETFLIX,
      payload: result?.data?.results,
    });
  } catch (error) {
    console.log("Error api netflix", error);
  }
};

// https://api.themoviedb.org/3/search/multi?api_key=ff85e9bc31195a13de8b51f9b8dc4859&language=en-US&query=k&page=1&include_adult=false

export const getMovieSearch = (key) => async (dispatch) => {
  try {
    const result = await axios.get(
      ` ${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${key}&page=1&include_adult=false`
    );
    dispatch({
      type: Types.GET_MOVIE_SEARCH,
      payload: result?.data?.results,
    });
    console.log(result);
  } catch (error) {
    console.log("Error api netflix", error);
  }
};

export const setMovieDetail = (payload) => ({
  type: Types.SET_MOVIE_DETAIL,
  payload,
});
