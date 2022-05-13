import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/" element={<Auth />} />
    </Routes>
  </BrowserRouter>;
  </Provider>
  // </React.StrictMode>
);