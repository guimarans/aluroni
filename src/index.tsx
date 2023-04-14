import 'normalize.css';
import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from './routes';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);