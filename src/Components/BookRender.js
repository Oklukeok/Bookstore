import React from 'react';
import PropTypes from 'prop-types';

const BookRender = ({ title, author }) => (
  <div className="book-container">
    <div>
      <ul>
        <li>
          <div>
            <div className="book-data">
              <div className="book-details">
                <span>Action</span>
                <span>{title}</span>
                <span>{author}</span>
                <div className="book-buttons-container">
                  <button type="button">Comments</button>
                  <span>|</span>
                  <button type="button">Remove</button>
                  <span>|</span>
                  <button type="button">Edit</button>
                </div>
              </div>
              <div className="progress-container">
                <div className="graphic-progress">
                  <div className="circular-progress" />
                  <div className="progress-number">
                    <span>64%</span>
                    <span>Completed</span>
                  </div>
                </div>
                <div className="current-chapter">
                  <span>Current Chapter</span>
                  <span>Chapter 17</span>
                  <button type="button">Update progress</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

);

BookRender.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookRender;
