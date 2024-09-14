// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/variables.css'; // Import global variables first
import './index.css'; // Import any global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
