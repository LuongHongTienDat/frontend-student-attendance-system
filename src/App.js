import './App.css';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import Layout from './Layouts/Layout';
import ListRegister from './Pages/Admin/ListRegister/ListRegister'
import Login from './Pages/Login/Login';
// import Form from './Components/Form';

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<ListRegister/>}/>
            {/* <Route path="/form-register" element={<Form/>}/> */}
            <Route path="/form-login" element={<Login/>}/>
        </Routes>
    </Layout>
  );
}
export default App;
