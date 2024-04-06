import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandlordSignup = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = () => {
        fetch('http://localhost:3000/LandlordSignup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                phone: phoneNumber
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(user => {
                if (user.id) {
                    const useremail = user.email;
                    // Navigate to Dashboard after successful login
                    navigate(`/LandlordDashbord?email=${useremail}`);
                } else {
                    console.error('Signup failed:', user);
                }
            })
            .catch(error => {
                console.error('Error during signup:', error);
            });
    };


    const clearOutput = () => {
        setName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <article className="pa6 black-80 vh-100 w-100">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="tc f1 fw6 ph0 mh0">Student Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="phone-number">Phone Number</label>
                            <input className="b pa2 input-reset ba bg-transparent" type="tel" name="phone-number" id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </fieldset>
                    <div className="mt3">
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="submit" value="Sign Up" onClick={handleSignin} />
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="reset" value="Clear" onClick={clearOutput} />
                    </div>
                </div>
            </article>

            <footer className="pt2 pb0 ph3 ph5-m ph6-l bg-light-gray">
                <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>
        </>

    );

}

export default LandlordSignup;
