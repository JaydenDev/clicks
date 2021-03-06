import React from 'react';
import ReactDOM from 'react-dom/client';
import './global/styling/global.css';
import App from './components/application/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
