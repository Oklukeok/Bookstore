import React from 'react';
import BookRender from './BookRender';
import AddBook from './Addbook';

const BooksList = () => (
  <div>
    <BookRender title="The Hunger Games" author="Suzanne Collins" />
    <BookRender title="Dune" author="Frank Herbert" />
    <BookRender title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    <AddBook />
  </div>
);

export default BooksList;
