import './App.css';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import Layout from './Layouts/Layout';
<<<<<<< HEAD
import Login from './Pages/Login/Login';
import Form from './Components/Form';

function App() {
  return (
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form-register" element={<Form/>}/>
            <Route path="/form-login" element={<Login/>}/>
        </Routes>
   
=======
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {
  return (
  
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/form-register" element={<Register/>}/>
            <Route path="/form-login" element={<Login/>}/>
        </Routes>
>>>>>>> 74cce0d9a83038bc2d6b35ae105166789dd0baad
  );
}
export default App;
