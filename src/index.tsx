import './global.scss';
import React from 'react';
import ModelCog from './ModelCog';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.body as HTMLElement
);
root.render(
  <React.StrictMode>
   <ModelCog/>
  </React.StrictMode>
);