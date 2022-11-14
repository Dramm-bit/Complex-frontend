import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { MyRoutes } from './router/MyRoutes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes>
        <App />
      </MyRoutes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);
