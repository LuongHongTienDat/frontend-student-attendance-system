import './App.css';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import Layout from './Layouts/Layout';
import ListRegister from './Pages/Admin/ListRegister/ListRegister'


function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<ListRegister/>}/>
        </Routes>
    </Layout>
  );
}
export default App;
