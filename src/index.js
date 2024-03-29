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
import WardenDashbord from './Warden/WardenDashbord';
import WardenProperty from './Warden/Property';
import WardenProfile from './Warden/Profile';
import AdminDashbord from './Admin/AdminDashbord';
import AdminProfile from './Admin/AdminProfile';
import AddStudent from './Admin/AddStudent';
import AddLandlord from './Admin/AddLandlord';
import AddWarden from './Admin/AddWarden';
import PostArticles from './Admin/PostArticles';
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
        <Route path="WardenDashbord" element={<WardenDashbord/>}></Route>
        <Route path="WardenProperty" element={<WardenProperty/>}></Route>
        <Route path="WardenProfile" element={<WardenProfile/>}></Route>
        <Route path="AdminDashbord" element={<AdminDashbord/>}></Route>
        <Route path="AdminProfile" element={<AdminProfile/>}></Route>
        <Route path="AddStudent" element={<AddStudent/>}></Route>
        <Route path="AddLandlord" element={<AddLandlord/>}></Route>
        <Route path="AddWarden" element={<AddWarden/>}></Route>
        <Route path="PostArticles" element={<PostArticles/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
