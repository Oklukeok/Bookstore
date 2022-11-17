import React from 'react';
import { useDispatch } from 'react-redux';
/*eslint-disable */import { removeBook } from '../Redux/Books/boooks-redux';/*eslint-disable */

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
