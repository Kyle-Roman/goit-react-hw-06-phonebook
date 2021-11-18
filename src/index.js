import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './Components/redux/store';
import { PersistGate } from "redux-persist/integration/react";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={"loading"} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
