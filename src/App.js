import './App.css';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import Layout from './Layouts/Layout';
import Login from './Pages/Login/Login';
import Form from './Components/Form';

function App() {
  return (
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form-register" element={<Form/>}/>
            <Route path="/form-login" element={<Login/>}/>
        </Routes>
   
  );
}
export default App;
