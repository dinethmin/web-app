import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Admin.css';

const AddLandlord = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSignin = () => {
        fetch('http://localhost:3000/AddLandlord', {
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
                    window.alert("Landlord Registration successful");
                    clearOutput();
                } else {
                    console.error('Registration failed:', user);
                }
            })
            .catch(error => {
                console.error('Error during Registration:', error);
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
            <nav className="db dt-l tr w-100 border-box ph5-l bg-dark-blue">
                <div className="fl f7 f4-m f3-ns">
                    <Link className="link dim white dib mr3" to={`/AdminDashbord?email=${userEmail}`} title="AdminDashbord">Dashbord</Link>
                    <Link className="link dim white dib mr3" to={`/AdminProfile?email=${userEmail}`} title="AdminProfile">Profile</Link>
                    <div className="dropdown1 link white dib mr3">
                        <label className="dropbtn1">Create Account</label>
                        <div className="dropdown-content1">
                            <Link to={`/AddLandlord?email=${userEmail}`}>Landlord</Link>
                            <Link to={`/AddWarden?email=${userEmail}`}>Warden</Link>
                            <Link to={`/AddStudent?email=${userEmail}`}>Student</Link>
                        </div>
                    </div>
                        <Link className="link dim white dib mr3" to={`/PostArticles?email=${userEmail}`} title="PostArticles">Articles</Link>
                    <Link className="link dim white dib mr2" to="/Home">Log Out</Link>
                </div>
                <button className="dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h1 w1 h2-ns w2-ns dib v-mid" alt="Student logo" />
                    {userEmail}
                </button>
            </nav>

            <div className="pt4 fl w-100 bg-light-gray vh-100" id="column_two" style={{ flexGrow: 1 }}>
                <h1 className="tc ttu tracked">Create Landlord Account</h1>
                <div>
                    <article className="black-80 w-100 tc">
                        <div>
                            <fieldset id="sign_up" className="ba2 b--transparent ph0 mh0 w-100 pa2 pr2">
                                <div className="mt3">
                                    <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mt3">
                                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                                    <input className="pa2 input-reset ba bg-transparent w-90" type="email" name="email-address" id="email-address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mt3 fn fl-ns w-50-ns">
                                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="pa2 input-reset ba bg-transparent w-80" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="mt3 fn fl-ns w-50-ns">
                                    <label className="db fw4 lh-copy f6" htmlFor="phone-number">Phone Number</label>
                                    <input className="pa2 input-reset ba bg-transparent w-80" type="tel" name="phone-number" id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                            </fieldset>
                            <div className="mt3">
                                <input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4" type="submit" value="Create" onClick={handleSignin}/>
                                <input className="f6 link ml5 dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4" type="reset" value="Clear" onClick={clearOutput} />
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <footer className="pt2 pb0 ph3 ph5-m ph6-l bg-light-gray">
                <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>
        </>

    );

}

export default AddLandlord;
