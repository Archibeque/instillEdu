import {
    getMovieFailure,
    getMovieStart,
    getMovieSuccess,
    
} from "./movieRedux"


export const getMovies = async (dispatch, updated) => {
    dispatch(getMovieStart());
    try {
      const data = await fetch(`https://www.omdbapi.com/?i=${process.env.REACT_APP_ID}&apikey=${process.env.REACT_APP_APIKEY}&s=${updated}`)
    const response = await data.json()
    console.log(response)
      dispatch(getMovieSuccess(response.Search));
    } catch (err) {
      dispatch(getMovieFailure());
    }
  };