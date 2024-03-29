import React from "react";
import { Link } from "react-router-dom";
import './Admin.css';


const PostArticles = () => {
    return (
        <>
            <div className="flex flex-column vh-100">
                <nav className="db dt-l tr w-100 border-box ph5-l bg-dark-blue">
                    <div className="fl f7 f4-m f3-ns">
                        <Link className="link dim white dib mr3" to="/AdminDashbord" title="AdminDashbord">Dashbord</Link>
                        <Link className="link dim white dib mr3" to="/AdminProfile" title="AdminProfile">Profile</Link>
                        <div className="dropdown1 link white dib mr3">
                            <label className="dropbtn1">Create Account</label>
                            <div className="dropdown-content1">
                                <Link to="/AddLandlord">Landlord</Link>
                                <Link to="/AddWarden">Warden</Link>
                                <Link to="/AddStudent">Student</Link>
                            </div>
                        </div>
                        <Link className="link dim white dib mr3" to="/PostArticles" title="PostArticles">Articles</Link>
                        <a className="link dim white dib mr2" href="#0">Logout</a>
                    </div>
                    <button className="dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                        <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h1 w1 h2-ns w2-ns dib v-mid" alt="Student logo" />
                        Admin@gmail.com
                    </button>
                </nav>

                <div className="pt2 fl w-100 bg-light-gray" style={{ flexGrow: 1 }}>
                    <h1 className="tc ttu tracked">Post Articles</h1>
                    <div>
                        <article className="helvetica pb5">
                            <header className="vh-100 bg-light-pink dt w-100">
                                <div
                                    style={{ backgroundImage: "http://mrmrs.github.io/photos/display.jpg" }}
                                    className="dtc v-mid cover ph3 ph4-m ph5-l">
                                    <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="headline" id="headline" placeholder="Head Line" />
                                    <h1 className="f2 f-subheadline-l measure lh-title fw9">A Night Taking Photos at San Francisco’s Spooky Ruins of the Sutro Baths</h1>
                                    <h2 className="f6 fw6 black">A story by Nancy Drew</h2>
                                </div>
                            </header>
                            <div className="serif ph3 ph4-m ph5-l">
                                <p className="lh-copy f5 f3-m f1-l measure center pv4">
                                    On <time>March 14, 1896</time>, the Sutro Baths were opened to the public as the world's largest indoor swimming pool establishment. </p>
                                <div className="f5 f3-m lh-copy">
                                    <div className="cf dt-l w-100 bt b--black-10 pv4">
                                        <div className="dtc-l v-mid mw6 pr3-l">
                                            <img className="w-100" src="http://mrmrs.github.io/photos/009.jpg" alt="" />
                                        </div>
                                        <div className="dtc-l v-mid f6 f5-m f4-l measure-l">
                                            <p className="measure pv4-l center">
                                                <span className="fw9 fw4-ns">
                                                    Before it burned to the ground, the structure</span> filled a small beach
                                                inlet below the Cliff House, also owned by Adolph Sutro at the time.
                                                Shortly after closing, a fire in 1966 destroyed the building
                                                while it was in the process of being demolished. All that remains
                                                of the site are concrete walls, blocked off stairs and
                                                passageways, and a tunnel with a deep crevice in the middle. The
                                                cause of the fire was arson. Shortly afterwards, the developer
                                                left San Francisco and claimed insurance money.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cf dn">
                                        <div className="fl w-100 w-50-l">
                                            <p className="f5 pv4">
                                                During high tides, water would flow directly into the pools from the
                                                nearby ocean, recycling the <span className="db f4 f3-m f1-l fw6 measure lh-title">two million US gallons of water in about an hour. </span>
                                            </p>
                                        </div>
                                        <div className="fl w-100 w-50-l">
                                            <p className="f5">
                                                During low tides, a powerful turbine water pump,
                                                built inside a cave at sea level, could be switched on from a control
                                                room and could fill the tanks at a rate of 6,000 US gallons a minute,
                                                recycling all the water in five hours.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cf">
                                        <div className="fl w-100 w-50-l pr2-l pb3">
                                            <img className="db w-100" src="http://mrmrs.github.io/photos/010.jpg" alt="dusk skyline above a grassy rockface covered in trees." />
                                        </div>
                                        <div className="fl w-50 w-50-l pr1 pr0-l pl2-l pb3">
                                            <img className="db w-100" src="http://mrmrs.github.io/photos/011.jpg" alt="sea and sky on the horizon with the foundations of a demolished house." />
                                        </div>
                                        <div className="fl w-50 w-50-l pl2 pl0-l pr2-l pb3">
                                            <img className="db w-100" src="http://mrmrs.github.io/photos/012.jpg" alt="sea with mist covering the rocky formations near the shore." />
                                        </div>
                                        <div className="fl w-100 w-50-l pl2-l">
                                            <img className="db w-100" src="http://mrmrs.github.io/photos/013.jpg" alt="foundations of a building on a cliff overlooking a lighthouse." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <footer className="w-100 ph3 ph5-m ph6-l bg-light-gray">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>
            </div>
        </>

    );

}

export default PostArticles;
