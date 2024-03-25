import React from "react";

const HomeLayout = () => {
    return (
        <>
            <article className="vh-100 dt w-100 ph5-ns tc br5 pv7 bg-washed-green dark-green">
                <h1 className="fw6 f3 f2-ns lh-title tc black ph3">
                    This is a tagline. For x.
                </h1>
                <h2 className="fw2 f4 lh-copy ">
                    This will change things. And we want you to be involved. This text needs to
                    be longer for testing sake.
                </h2>
                <p className="fw1 f5">
                    Sign up for beta access or learn more about x.
                </p>
            </article>

            <footer className="pt2 pb0 ph3 ph5-m ph6-l bg-light-gray">
                <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>
        </>
    );
}

export default HomeLayout;