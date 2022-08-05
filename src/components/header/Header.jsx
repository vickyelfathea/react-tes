import React from 'react';
import style from './header.module.css';
import { useSelector } from 'react-redux';

const Header = (props) => {
  return (
    <>
      <div className={style.navbar}>
        <a className={style.page} href="/">
          home
        </a>
        <a className={style.pagecoin} href="/">
          coin list
        </a>
      </div>
    </>
  );
};

export default Header;
