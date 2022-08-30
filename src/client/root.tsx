/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
