import React from "react";

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

const Signup = () => {
    return (
        <>
            <article className="pa6 black-80 vh-100 w-100">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="tc f1 fw6 ph0 mh0">Student Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="phone-number">Phone Number</label>
                            <input className="b pa2 input-reset ba bg-transparent" type="tel" name="phone-number" id="phone-number" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="mt3">
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="submit" value="Sign Up" />
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="reset" value="Clear" onClick={ClearOutput} />
                    </div>
                </form>
            </article>

            <footer className="pt2 pb0 ph3 ph5-m ph6-l bg-light-gray">
                <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>
        </>

    );

}

export default Signup;
