import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Admin.css';

const AdminProfile = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

    useEffect(() => {
        // Fetch admin profile data
        fetch(`http://localhost:3000/AdminProfile/${userEmail}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }
                return response.json();
            })
            .then(data => {
                // Update form data with fetched values
                setFormData({
                    name: data.name,
                    email: data.email,
                    phoneNumber: data.phone 
                });
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, [userEmail]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/AdminProfile/${userEmail}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update profile');
                }
                setFormData({ ...formData, password: '' });
                return response.json();
            })
            .then(data => {
                window.alert('Profile updated successfully:', data);
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    };

    return (
        <>
            {/* Navigation */}
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
                    <Link className="link dim white dib" to="/Home">Log Out</Link>
                </div>
                <button className="dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h1 w1 h2-ns w2-ns dib v-mid" alt="Student logo" />
                    {userEmail}
                </button>
            </nav>

            {/* Profile form */}
            <article style={{ display: 'flex' }}>
                <div className="fl w-0 bg-navy" id="column_one"></div>
                <div className="pt4 fl w-100 bg-light-gray vh-100" id="column_two" style={{ flexGrow: 1 }}>
                    <h1 className="tc ttu tracked">Profile</h1>
                    <div>
                        <article className="black-80 w-100 tc">
                            <form onSubmit={handleSubmit}>
                                <fieldset id="sign_up" className="ba2 b--transparent ph0 mh0 w-100 pa2 pr2">
                                    {/* Form inputs */}
                                    <div className="mt3">
                                        <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent w-90"
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent w-90"
                                            type="email"
                                            name="email-address"
                                            id="email-address"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mt3 fn fl-ns w-50-ns">
                                        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent w-80"
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mt3 fn fl-ns w-50-ns">
                                        <label className="db fw4 lh-copy f6" htmlFor="phone-number">Phone Number</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent w-80"
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </fieldset>

                                <div className="mt3">
                                    {/* Submit button */}
                                    <input
                                        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4"
                                        type="submit"
                                        value="Edit"
                                    />
                                </div>

                            </form>
                        </article>
                    </div>
                </div>
            </article >
            {/* Footer */}
            < footer className="bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999" >
                <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer >
        </>
    );
}

export default AdminProfile;
