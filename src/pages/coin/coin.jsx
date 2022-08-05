import React, { useState, useEffect } from 'react';
import style from './coin.module.css';
import axios from 'axios';
import Header from '../../components/header/Header';
import Pagebar from '../../components/pagebar/Pagebar';

function Coins() {
  const [coin, setCoin] = useState([]);

  const getDataCoin = async () => {
    try {
      const { data } = await axios.get('https://api.coinpaprika.com/v1/coins/');
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
      <p className={style.page}>coin list</p>
      {/* content */}
      <div className={style.content}>
        <div className={style.main}>
          <h3 className={style.subtitle}>coin list</h3>
          <div className={style.search}>
            <select name="select">
              <option value="" selected disabled hidden>
                Select
              </option>
              <option value="id">Id</option>
              <option value="name">Name</option>
              <option value="type">Type</option>
              <option value="is_active">Active</option>
            </select>
            <input type="text" placeholder="Search.."></input>
            <button className={style.btn}>Search</button>
          </div>

          <table className={style.coins}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Rank</th>
              <th>Type</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
            {coin.slice(0, 4).map((c) => {
              return (
                <tr>
                  <td>
                    <a href={`/detail/${c.id}`}>{c.id}</a>
                  </td>
                  <td>{c.name}</td>
                  <td>{c.symbol}</td>
                  <td>{c.rank}</td>
                  <td>{c.type}</td>
                  <td>{c.is_active == true ? 'True' : 'False'}</td>
                  <td>
                    <button className={style.btn}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
          <div className={style.pagenumber}>
            {/* dsd */}
            <Pagebar page="1" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>Kandidat: Vicky el Fathea</div>
    </>
  );
}

export default Coins;
