import React, { useState, useEffect } from 'react';
import style from './pagination.module.css';

const Pagebar = ({ page }) => {
  let numpage = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [pagination, setPagination] = useState(1);

  const fnHandleSubmit = (event) => {
    event.preventDefault();
  };

  const next = (event) => {
    setPagination(parseInt(page) + 1);
  };

  return (
    <>
      <div className={style.pagenumber}>
        {' '}
        <a href={`/page/${page - 1}`}>&lt;</a>
        {numpage.map((v) => {
          return (
            <a href={`/page/${v + parseInt(page)}`}>{v + parseInt(page)}</a>
          );
        })}
        <a href={`/page/${parseInt(page) + 1}`}>&gt;</a>
      </div>{' '}
    </>
  );
};

export default Pagebar;
