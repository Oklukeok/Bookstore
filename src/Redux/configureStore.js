import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerBook from './Books/boooks-redux';
import categoriesRed from './Categories/categories-redux';

// function that create a combine reducers with the function about book and categories
const rootReducer = combineReducers({
  book: reducerBook,
  categories: categoriesRed,
});

// create a store
const store = configureStore({ reducer: rootReducer });

export default store;
