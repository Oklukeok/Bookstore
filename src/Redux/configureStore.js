import { combineReducers, configureStore } from '@reduxjs/toolkit';
import initialState from './books/boooks-redux.js';
import checkStatus from './categories/categories-redux.js';

// function that create a combine reducers with the function about book and categories
const rootReducer = combineReducers({
  book: initialState,
  categories: checkStatus,
});

// create a store
const store = configureStore(rootReducer);

export default store;
