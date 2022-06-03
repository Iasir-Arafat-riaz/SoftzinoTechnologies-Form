import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NameGender1 from './formPages/NameGender1/NameGenger1';
import Header from './Shared/Header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
   <BrowserRouter>
   <Header/>
   <Routes>
     <Route path='/' element={<NameGender1/>}/>
     <Route path='/nameGen' element={<NameGender1/>}/>
   </Routes>
   </BrowserRouter>
{/* <h1>softzino technologies</h1> */}
 </div>
);


;
