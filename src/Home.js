import React from "react";
import { Outlet, Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import './Home.css'

const Home = () => {
    return (
        <>
            <header className="bg-dark-gray fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="fixed f7 f4-m f3-ns fw6 ttu tracked">
                    <Link className="link dim blue dib mr2" to="/Home" title="Home"><IoHome /></Link>
                    <Link className="link dim blue dib mr2" to="/Login" title="Login">Login</Link>
                    <Link className="link dim blue dib mr2" to="/Signup" title="Signup">Signup</Link>
                    <div className="dropdown link blue dib mr2">
                        <label className="dropbtn">Landlord</label>
                        <div className="dropdown-content">
                            <Link to="/LandlordLogin">Login</Link>
                            <Link to="/LandlordSignup">Signup</Link>
                        </div>
                    </div>
                    <Link className="link dim blue dib mr2" to="/WardenLogin" title="WardenLogin">Warden</Link>
                    <Link className="link dim blue dib mr2" to="/AdminLogin" title="AdminLogin">Admin</Link>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Home;
