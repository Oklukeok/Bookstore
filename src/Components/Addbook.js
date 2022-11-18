import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../Redux/Books/boooks-redux';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const uId = uuid();
  const id = uId.slice(0, 8);
  const category = 'Action';

  const onChangeHandlerTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeHandlerAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onClickInput = () => {
    dispatch(addBook({
      id, title, author, category,
    }));
    setTitle('');
    setAuthor('');
    setTimeout(() => dispatch(fetchBooks()), 500);
  };

  return (
    <form className="form">
      <h3 className="add-title">ADD NEW BOOK</h3>
      <div className="inputs">
        <input className="add-book" type="text" placeholder="Book Title" onChange={onChangeHandlerTitle} value={title} />
        <input type="text" placeholder="Author" className="add-author" onChange={onChangeHandlerAuthor} value={author} />
        <input className="btn-add-book" type="button" value="ADD BOOK" onClick={onClickInput} />
      </div>
    </form>
  );
};

export default AddBook;
