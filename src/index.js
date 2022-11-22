import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import { conjuntoContext } from './context/createContext';
import { MyRoutes } from './router/MyRoutes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <conjuntoContext.Provider value={null}>
      <BrowserRouter>
        <MyRoutes>
          <App />
        </MyRoutes>
      </BrowserRouter>
    </conjuntoContext.Provider>
  </React.StrictMode>
);
