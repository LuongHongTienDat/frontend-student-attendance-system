import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import Layout from './Layouts/Layout';
import ListRegister from './Pages/Admin/ListRegister/ListRegister'
import Login from './Pages/Login/Login';
import InfoPanel from './Pages/userPage/info';
import PasswordChange from './Pages/userPage/passwordChange'
import UserEventList from './Pages/userPage/eventList'
// import Form from './Components/Form';

function App() {
  const admin_data = [
    {
      FullName: 'Tieu Khong Cay',
      DoB: "2002-01-19",
      StudentID: '2010000',
      Email: 'ahihi@gmail.com',
      PhoneNum: '0901073299',
      Password: 'ahjdongok',
      events: [
        {
          eventName: 'Mua he xanh CSE 2022',
          time: '28/06/2022',
          st: 'Dang dien ra',
        },
        {
          eventName: 'Mua he xanh CSE 2022',
          time: '28/06/2022',
          st: 'Dang dien ra',
        },
        {
          eventName: 'Mua he xanh CSE 2022',
          time: '28/06/2022',
          st: 'Dang dien ra',
        },
        {
          eventName: 'Mua he xanh CSE 2022',
          time: '28/06/2022',
          st: 'Dang dien ra',
        },
        {
          eventName: 'Mua he xanh CSE 2022',
          time: '28/06/2022',
          st: 'Dang dien ra',
        },
        {
          eventName: 'Mua he xanh CSE 2022',
          time: '28/06/2022',
          st: 'Dang dien ra',
        },
        {
          eventName: 'Mua he xanh CSE 2022',
          time: '28/06/2022',
          st: 'Dang dien ra',
        },
        {
          eventName: 'Mua he xanh CSE 2022',
          time: '28/06/2022',
          st: 'Dang dien ra',
        },

      ],
    }
  ]

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<ListRegister />} />
        {/* <Route path="/form-register" element={<Form/>}/> */}
        <Route path="/form-login" element={<Login />} />

        <Route path="/info" element={<InfoPanel data={admin_data[0]} />} />
        <Route path="/userevent" element={<UserEventList data={admin_data[0]} />} />
        <Route path="/password" element={<PasswordChange data={admin_data[0]} />} />

      </Routes>
    </Layout>
  );
}
export default App;
