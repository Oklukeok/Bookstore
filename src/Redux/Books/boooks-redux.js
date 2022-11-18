import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBook';
const FETCH_BOOKS = 'bookstore/src/redux/books/fetchBooks';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EqZ6YUUbJz8PKUL0OiMU/books/';

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, () => axios.get(url)
  .then((response) => {
    const books = response.data;
    const data = Object.keys(books).map((id) => ({
      id,
      title: books[id][0].title,
      author: books[id][0].author,
      category: books[id][0].category,
    }));
    return data;
  }));

export const addBook = createAsyncThunk(ADD_BOOK, (payload) => {
  axios.post(`${url}`, {
    item_id: payload.id,
    title: payload.title,
    author: payload.author,
    category: payload.category,
  })
    .then((response) => (response.data));
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, (id) => {
  axios.delete(`${url}${id}`)
    .then((response) => (response.data));
});

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (_, action) => action.payload);
    builder.addCase(fetchBooks.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(fetchBooks.pending, (_, action) => action.payload);
  },
});

export default booksSlice.reducer;
