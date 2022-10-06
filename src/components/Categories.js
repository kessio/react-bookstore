import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const theStatus = useSelector((state) => state.status.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{theStatus}</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
    </div>
  );
}
