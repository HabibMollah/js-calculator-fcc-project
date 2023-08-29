import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InputContextProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <InputContextProvider>
      <App />
    </InputContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
