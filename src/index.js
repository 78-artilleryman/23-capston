import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Detail from './Detail';
import {Routes,Route,Link, BrowserRouter} from "react-router-dom";
import Detailview from './Detailview';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}/>
          <Route path="/detail" element={<Detail />}/>
          <Route path='/dv' element={<Detailview />}/>
      </Routes>
      </BrowserRouter>
      
      




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
