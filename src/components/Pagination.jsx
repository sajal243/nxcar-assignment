import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/carSlice';
import "../App.css";

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.car.page);

  if (totalPages <= 1) return null;

  return (
    <div className='pagination'>
        <button className='page_btn'  onClick={() => dispatch(setPage(page - 1))} disabled={page === 1}>Prev</button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
        <button
          key={p}
          disabled={p === page}
          onClick={() => dispatch(setPage(p))}
          className='page_btn'
        >
          {p}
        </button>
        
      ))}
      <button className='page_btn'  onClick={() => dispatch(setPage(page + 1))} disabled={page === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
