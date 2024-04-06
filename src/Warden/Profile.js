import React from "react";
import { Link, useLocation } from "react-router-dom";

const ClearOutput = () => {
    const Name = document.getElementById('name');
    const Phone = document.getElementById('phone-number');
    const Email = document.getElementById('email-address');
    const Password = document.getElementById('password');

    if (!(Email === "") || !(Password === "") || !(Name === "") || !(Password === "")) {
        Name.value = "";
        Phone.value = "";
        Email.value = "";
        Password.value = "";
    }

};

const WardenProfile = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');

    return (
        <>
            <nav className="db dt-l tr w-100 border-box ph5-l bg-dark-blue">
                <div className="fl f7 f4-m f3-ns">
                    <Link className="link dim white dib mr3" to={`/WardenDashbord?email=${userEmail}`} title="WardenDashbord">Dashbord</Link>
                    <Link className="link dim white dib mr3" to={`/WardenProfile?email=${userEmail}`} title="WardenProfile">Profile</Link>
                    <Link className="link dim white dib mr3" to={`/WardenProperty?email=${userEmail}`} title="WardenProperty">Property</Link>
                    <Link className="link dim white dib" to="/Home">Log Out</Link>
                </div>
                <button className="dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h1 w1 h2-ns w2-ns dib v-mid" alt="Student logo" />
                    {userEmail}
                </button>
            </nav>

            <article style={{ display: 'flex' }}>

                <div className="fl w-0 bg-navy" id="column_one"></div>

                <div className="fl w-100 bg-light-gray vh-100" id="column_two" style={{ flexGrow: 1 }}>
                    <h1 className="tc ttu tracked">Profile</h1>
                    <div>
                        <article className="black-80 w-100 tc">
                            <form>
                                <fieldset id="sign_up" className="ba2 b--transparent ph0 mh0 w-100 pa2 pr2">
                                    <div className="mt3">
                                        <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                                        <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="name" id="name" />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                                        <input className="pa2 input-reset ba bg-transparent w-90" type="email" name="email-address" id="email-address" />
                                    </div>
                                    <div className="mt3 fn fl-ns w-50-ns">
                                        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                        <input className="pa2 input-reset ba bg-transparent w-80" type="password" name="password" id="password" />
                                    </div>
                                    <div className="mt3 fn fl-ns w-50-ns">
                                        <label className="db fw4 lh-copy f6" htmlFor="phone-number">Phone Number</label>
                                        <input className="pa2 input-reset ba bg-transparent w-80" type="tel" name="phone-number" id="phone-number" />
                                    </div>
                                </fieldset>
                                <div className="mt3">
                                    <input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4" type="submit" value="Edit" />
                                    <input className="f6 link ml5 dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4" type="reset" value="Clear" onClick={ClearOutput} />
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

export default WardenProfile;