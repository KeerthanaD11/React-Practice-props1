import React from 'react';
import ReactDOM from 'react-dom/client';
import PropsFunc from './props/PropsFunc.js';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <PropsFunc isLoggedIn={true} username='Keerthana'></PropsFunc>
    </React.StrictMode>);

  reportWebVitals();


