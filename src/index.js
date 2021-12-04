import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import Test_hook from './test_redux';
import {store} from './store/index.js';
import New_app from './New_app';
import { BrowserRouter } from 'react-router-dom';








ReactDOM.render(
  <Provider store={store}>
   
    <React.StrictMode>
    <BrowserRouter>
      {/* <Test_hook/> */}
      <New_app/>
    {/* <App /> */}
    </BrowserRouter>
    </React.StrictMode>
   
  
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
