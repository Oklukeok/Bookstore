import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../Redux/Books/boooks-redux';

const RemoveBook = (id) => {
  const dispatch = useDispatch();
  const index = id;
  const convertedId = index.id;
  const onClickRemove = () => {
    dispatch(removeBook(convertedId));
    setTimeout(() => dispatch(fetchBooks()), 500);
  };
  return (
    <button type="button" className="btn-buttons" onClick={onClickRemove} id={convertedId}>Remove</button>
  );
};

export default RemoveBook;
