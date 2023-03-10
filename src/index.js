import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux'

import userReducer from './features/user'
import themeReducer from './features/theme';
import apiDataReducer from './features/apiData';


const store = configureStore({

  reducer: {
    // collection of reducers

    // user is a reducer
    users: userReducer,
    themee: themeReducer,
    // apidatas: apiDataReducer.reducer
    apidatas: apiDataReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
