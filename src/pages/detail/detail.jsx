import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './coin.module.css';
import axios from 'axios';
import Header from '../../components/header/Header';

function Detail() {
  const [coin, setCoin] = useState([]);
  const params = useParams();

  const getDataCoin = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coinpaprika.com/v1/coins/${params.id}`
      );
      setCoin(data);
    } catch (error) {
      console.log('🚀 ~ file: home.jsx ~ line 14 ~ getDataProd ~ error', error);
    }
  };

  // didmount
  useEffect(() => {
    getDataCoin();
  }, []);

  return (
    <>
      <Header />
      <p className={style.page}>coin detail</p>

      {/* content */}
      <div className={style.content}>
        <div className={style.main}>
          <h3 className={style.subtitle}>coin detail</h3>
          <div className={style.detail}>
            <p>
              <p className={style.label}>ID </p> {coin.id}
            </p>
            <p>
              <p className={style.label}>Name</p> {coin.name}
            </p>
            <p>
              <p className={style.label}>Symbol </p> {coin.symbol}
            </p>
            <p>
              <p className={style.label}>Type </p> {coin.type}
            </p>
            <p>
              <p className={style.label}>Active</p>
              {coin.is_active == true ? 'True' : 'False'}
            </p>
            <p>
              <p className={style.label}>Is New ?</p>
              {coin.is_new == true ? 'True' : 'False'}
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>Kandidat: Vicky el Fathea</div>
    </>
  );
}

export default Detail;
