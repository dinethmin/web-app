import React from "react";

const HomeLayout = () => {
    return (
        <>
            <article class="vh-100 dt w-100 center ph3 ph5-ns tc br5 pv5 bg-washed-green dark-green">
                <h1 class="fw6 f3 f2-ns lh-title tc white ph3">
                    This is a tagline. For x.
                </h1>
                <h2 class="fw2 f4 lh-copy ">
                    This will change things. And we want you to be involved. This text needs to
                    be longer for testing sake.
                </h2>
                <p class="fw1 f5">
                    Sign up for beta access or learn more about x.
                </p>
                <div>
                    <a class="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                        href="#">
                        Sign Up
                    </a>
                    <a class="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
                        href="#">
                        Learn More
                    </a>
                </div>
            </article>
        </>
    );
}

export default HomeLayout;