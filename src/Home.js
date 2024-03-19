import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (
        <>
            <header className="bg-dark-gray fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="fixed f6 fw6 ttu tracked">
                    <Link className="link dim f4-ns blue dib mr3" to="/Login" title="Login">Login</Link>
                    <Link className="link dim f4-ns blue dib mr3" to="/Signup" title="Signup">Signup</Link>
                    <div className="dropdown link dim f4-ns blue dib mr3">
                        <a className="dropbtn">Landlord</a>
                        <div className="dropdown-content f4-ns">
                            <Link to="/LandlordLogin">Login</Link>
                            <Link to="/LandlordSignup">Signup</Link>
                        </div>
                    </div>
                    <Link className="link dim f4-ns blue dib mr3" to="/WardenLogin" title="WardenLogin">Warden</Link>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Home;
