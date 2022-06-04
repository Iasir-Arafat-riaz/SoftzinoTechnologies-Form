import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NameGender1 from './formPages/NameGender1/NameGenger1';
import Header from './Shared/Header/Header';
import Home from './formPages/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
   <BrowserRouter>
   <Header/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     
   </Routes>
   </BrowserRouter>
{/* <h1>softzino technologies</h1> */}
 </div>
);


;
