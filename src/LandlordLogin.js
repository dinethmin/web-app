import React from "react";

const LandlordLogin = () => {
    return (
        <div>
            <main className="pa6 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="tc f1 fw6 ph0 mh0">Landlord Log In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="submit" value="Log In" />
                        <input className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type="reset" value="Clear" />
                    </div>
                    <div className="lh-copy mt3">
                        <a href="#0" className="f6 link dim black db">Sign up</a>
                        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                    </div>
                </form>
            </main>

            <footer class="pt2 pb0 ph3 ph5-m ph6-l bg-light-gray">
                <small class="f6 db tc">©<b class="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>

        </div>
    );

}

export default LandlordLogin;