import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="Lesson-Panel">
      <div className="headings">
        <span className="actions">Action</span>
        <span className="chapter">CURRENT CHAPTER</span>
      </div>
      <div className="content-wrap">
        <div className="col-1">
          <h5 className="title">{title}</h5>
          <p className="author">{author}</p>
          <div className="buttons">
            <button type="button" className="actions-btn line">Comments</button>
            <button
              className="actions-btn line"
              type="button"
              id={id}
              onClick={(e) => {
                dispatch(deleteBook(e.target.id));
              }}
            >
              Remove
            </button>
            <button type="button" className="actions-btn">Edit</button>
          </div>
        </div>
        <div className="single-chart">
          <svg viewBox="0 0 36 36" className="circular-chart blue">
            <path
              className="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray="60, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div>
            <text className="percentage">60%</text>
            <text className="completed">Completed</text>
          </div>
        </div>
        <div className="currentchapter">
          <div className="thechapter">Chapter 17: A lesson</div>
          <button type="button" className="updateprogress"><span className="progresstxt">Update Progress</span></button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
