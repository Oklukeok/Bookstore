import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const onClickStatus = (event) => {
    dispatch(checkStatus());
    event.currentTargeg.toggle('btn-disable');
  };
  return (
    <div className="status-container">
      <button className="categories-btn" type="button" onClick={onClickStatus}>Check Status</button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
