import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const LandlordProfile = () => {
    const [height, setHeight] = useState(0); // Height state

    useEffect(() => {
        // Accessing column_two.offsetHeight after the component has been rendered
        const column2 = document.getElementById('column_two');
        if (column2) {
            setHeight(column2.offsetHeight);
        }
    }, []);

    return (
        <>
            <nav className="db dt-l w-100 tr border-box ph5-l bg-dark-blue">
                <button className=" dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h2 w2 dib v-mid" alt="Student logo" />
                    Landlord@gmail.com
                </button>
            </nav>

            <article style={{ display: 'flex' }}>

                <div className="fl w-20 bg-navy" id="column_one" style={{ flexShrink: 0, height: height }}>
                    <div>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to="/LandlordDashbord" title="LandlordDashbord">Dashbord</Link>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to="/LandlordProfile" title="LandlordProfile">Profile</Link>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to="/AddProperty" title="AddProperty">Property</Link>
                        <a className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" href="#0">Log Out</a>
                    </div>
                </div>

                <div className="fl w-80 bg-light-gray vh-100" id="column_two" onLoad={useEffect} style={{ flexGrow: 1 }}>

                    <div>
                        <button className="f6 br2 ph3 pv2 mb2 dib black bg-light-gray" id="HideBtn" onClick={Hide}>Hide Blocks</button>
                    </div>
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

export default LandlordProfile;