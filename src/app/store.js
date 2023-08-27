import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "../app_state/movieRedux";


export const store = configureStore({
  reducer: movieReducer,
  
});

