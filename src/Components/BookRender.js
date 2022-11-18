import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './removeBook';

const Book = (
  {
    id, title, author, category,
  },
) => (
  (
    <div className="book-container">
      <div>
        <ul className="main-ul">
          <li>
            <div>
              <div className="book-data">
                <div className="book-details">
                  <div className="book-author">
                    <span className="action">{category}</span>
                    <span className="title">{title}</span>
                    <span className="author">{author}</span>
                  </div>
                  <div className="book-buttons-container">
                    <button className="btn-buttons" type="button">Comments</button>
                    <span>|</span>
                    <RemoveBook id={id} />
                    <span>|</span>
                    <button className="btn-buttons" type="button">Edit</button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="graphic-progress">
                    <div className="circular-progress" />
                    <div className="progress-number">
                      <span className="porcent">52%</span>
                      <span className="status">Completed</span>
                    </div>
                  </div>
                  <div className="current-chapter">
                    <span className="current">Current Chapter</span>
                    <span className="chapter">Chapter 16</span>
                    <button className="btn-update" type="button">UPDATE PROGRESS</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
