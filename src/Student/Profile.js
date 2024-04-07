import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Hide = () => {
    const column1 = document.getElementById("column_one");
    const column2 = document.getElementById("column_two");
    const btn = document.getElementById("HideBtn")
    if (btn.innerHTML === "Hide Blocks") {
        column1.style.display = 'none';
        column2.style.width = '100%';
        btn.innerHTML = "Show Blocks";
    } else if (btn.innerHTML === "Show Blocks") {
        column1.style.display = 'inline';
        column2.style.width = '80%';
        btn.innerHTML = "Hide Blocks";
    }
};

const Profile = () => {
    const [height, setHeight] = useState(0); // Height state
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
        // Accessing column_two.offsetHeight after the component has been rendered
        const column2 = document.getElementById('column_two');
        if (column2) {
            setHeight(column2.offsetHeight);
        }

        // Fetch admin profile data
        fetch(`http://localhost:3000/Profile/${userEmail}`)
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
        fetch(`http://localhost:3000/Profile/${userEmail}`, {
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
            <nav className="db dt-l w-100 tr border-box ph5-l bg-dark-blue">
                <button className=" dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h2 w2 dib v-mid" alt="Student logo" />
                    {userEmail}
                </button>
            </nav>

            <article style={{ display: 'flex' }}>

                <div className="fl w-20 bg-navy" id="column_one" style={{ flexShrink: 0, height: height }}>
                    <div>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Dashbord?email=${userEmail}`} title="Dashbord">Dashbord</Link>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Profile?email=${userEmail}`} title="Profile">Profile</Link>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Reservations?email=${userEmail}`} title="Reservations">Reservations</Link>
                        <Link className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to="/Home">Log Out</Link>
                    </div>
                </div>

                <div className="fl w-80 bg-light-gray vh-100" id="column_two" onLoad={useEffect} style={{ flexGrow: 1 }}>

                    <div>
                        <button className="f6 br2 ph3 pv2 mb2 dib black bg-light-gray" id="HideBtn" onClick={Hide}>Hide Blocks</button>
                    </div>
                    <div>
                        <article className="black-80 w-100 tc">
                            <h1 className="tc ttu tracked">Profile</h1>
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
            </article>
            <footer className="bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999">
                <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>
        </>

    );
}

export default Profile;