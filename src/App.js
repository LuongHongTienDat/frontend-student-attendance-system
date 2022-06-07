import './App.css';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import Layout from './Layouts/Layout';


function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Layout>
  );
}
export default App;
