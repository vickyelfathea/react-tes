import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/coin/coin';
import Detail from './pages/detail/detail';
import Pages from './pages/pagination/paginaton';

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="page/:n" element={<Pages />} />
        <Route path="page/:n/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
