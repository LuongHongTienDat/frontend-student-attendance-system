import './App.css';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import Layout from './Layouts/Layout';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {
  return (
  
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/form-register" element={<Register/>}/>
            <Route path="/form-login" element={<Login/>}/>
        </Routes>
  );
}
export default App;
