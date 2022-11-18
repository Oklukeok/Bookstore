import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './BookRender';
import AddBook from './Addbook';
import { fetchBooks } from '../Redux/Books/boooks-redux';

const Books = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="main-container">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
