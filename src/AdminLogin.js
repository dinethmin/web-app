import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        fetch('http://localhost:3000/AdminLogin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    const useremail = user.email;
                    // Navigate to Dashboard after successful login
                    navigate(`/AdminDashbord?email=${useremail}`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const clearFields = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <main className="pa6 black-80 vh-100 w-100">
            <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="tc f1 fw6 ph0 mh0">Admin Log In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="submit" value="Log In" onClick={handleLogin} />
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="reset" value="Clear" onClick={clearFields} />
                    </div>
                </div>
            </main>

            <footer className="pt4 mt3 pb0 ph3 ph5-m ph6-l bg-light-gray">
                <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>
        </>
    );
}

export default Login;
