import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShopAdd from "./Routes/ShopAdd";
import Main from "./Main";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/shops" element={<ShopAdd />} />
            <Route path="/" element={<Main />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
