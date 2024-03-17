import React from "react";
import { Outlet, Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <header className="bg-gray fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="fixed f6 fw6 ttu tracked">
                    <Link className="link dim black dib mr3" to="/App" title="App">App</Link>
                    <Link className="link dim black dib mr3" to="/Login" title="Login">Login</Link>
                    <Link className="link dim black dib mr3" to="/App" title="App">App</Link>
                    <Link className="link dim black dib mr3" to="/App" title="App">App</Link>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Home;