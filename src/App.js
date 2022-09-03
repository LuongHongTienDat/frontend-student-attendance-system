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
import Form from './Components/Form';
import EventManage from './Pages/Admin/eventManagement/EventManage'
import DataManage from './Pages/Admin/dataManagement/DataManage'
import AccountApproval from './Pages/Admin/accountApproval/AccountApproval'
import Check_in_out from './Pages/Checkin/Check-in-out';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<Login />} />

        <Route path="/check-in-out/:eid" element={<Check_in_out />} />
        <Route path="/info" element={<InfoPanel />} />
        <Route path="/userevent" element={<UserEventList />} />
        <Route path="/password" element={<PasswordChange />} />

        <Route path="/admin/eventManage" element={<EventManage />} />
        <Route path="/admin/dataManage" element={<DataManage />} />
        <Route path="/admin/accountApproval" element={<AccountApproval />} />
        <Route path="/admin/eventRegister" element={<ListRegister />} />
      </Routes>
    </Layout>
  );
}
export default App;