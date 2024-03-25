import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import HomeLayout from './HomeLayout';
import Login from './Login';
import Signup from './Signup';
import AdminLogin from './AdminLogin';
import LandlordLogin from './LandlordLogin';
import LandlordSignup from './LandlordSignup';
import WardenLogin from './WardenLogin';
import Dashbord from './Student/Dashbord';
import Profile from './Student/Profile';
import Reservations from './Student/Reservations';
import LandlordDashbord from './Landlord/LandlordDashbord';
import LandlordProfile from './Landlord/LandlordProfile';
import AddProperty from './Landlord/AddProperty';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeLayout />} />
          <Route path="Home" element={<HomeLayout />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="LandlordLogin" element={<LandlordLogin />} />
          <Route path="LandlordSignup" element={<LandlordSignup />} />
          <Route path="WardenLogin" element={<WardenLogin />} />
          <Route path="AdminLogin" element={<AdminLogin />} />
        </Route>
        <Route path="Dashbord" element={<Dashbord/>}></Route>
        <Route path="Profile" element={<Profile/>}></Route>
        <Route path="Reservations" element={<Reservations/>}></Route>
        <Route path="LandlordDashbord" element={<LandlordDashbord/>}></Route>
        <Route path="LandlordProfile" element={<LandlordProfile/>}></Route>
        <Route path="AddProperty" element={<AddProperty/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
