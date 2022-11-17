import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
/*eslint-disable */import { addBook } from '../Redux/Books/boooks-redux';/*eslint-disable */

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const uId = uuid();
  const id = uId.slice(0, 8);
  const completed = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 10);

  const onChangeHandlerTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeHandlerAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onClickInput = () => {
    dispatch(addBook({
      id, title, author, completed: `${completed}%`, chapter: `${chapter}`,
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="form">
      <h3 className="add-title">ADD NEW BOOK</h3>
      <div className="inputs">
        <input className="add-book" type="text" placeholder="Book Title" onClick={onChangeHandlerTitle} />
        <input type="text" placeholder="add-author" onChange={onChangeHandlerAuthor} value={author} />
        <input className="btn-add-book" type="button" value="ADD BOOK" onClick={onClickInput} />
      </div>
    </form>
  );
};

export default AddBook;
