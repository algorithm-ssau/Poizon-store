import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';

export const Context = createContext(null);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      item: new ItemStore(),
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
