import React from "react";

const LandlordSignup = () => {
    return (
        <>
            <article className="pa6 black-80 vh-100 w-100">
                <form className="measure center" action="sign-up_submit" method="get" accept-charset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="tc f1 fw6 ph0 mh0">Landlord Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="password">Phone Number</label>
                            <input className="b pa2 input-reset ba bg-transparent" type="password" name="password" id="password" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="mt3">
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="submit" value="Sign Up" />
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="reset" value="Clear" />
                    </div>
                </form>
            </article>

            <footer class="pt2 pb0 ph3 ph5-m ph6-l bg-light-gray">
                <small class="f6 db tc">©<b class="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>
        </>

    );

}

export default LandlordSignup;
