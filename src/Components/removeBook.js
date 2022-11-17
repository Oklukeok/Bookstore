import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/boooks-redux';

const RemoveBook = (id) => {
  const dispatch = useDispatch();
  const onClickRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <button type="button" onClick={onClickRemove}>Remove</button>
  );
};

export default RemoveBook;
