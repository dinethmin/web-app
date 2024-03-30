import React from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Link } from "react-router-dom";
import './Admin.css';

const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

const AdminDashbord = () => {

    return (
        <APIProvider apiKey={"AIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
            <>
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

                <article style={{ display: 'flex' }}>

                    <div className="fl w-0" id="column_one"></div>

                    <div className="fl w-80 bg-light-gray vh-100" id="column_two" style={{ flexGrow: 1 }}>

                        <article className="m-100 ml2 mr2 bg-light-gray br3 ba b--black-10">
                            <div className="tc">
                                <img src="https://students.nsbm.ac.lk/img/1nsbm.png" className="h3 w7 dib ba b--black-05 pa2" alt="kitty staring at you" />
                                <h3 className="ma0 tc">Welcome Admin</h3>
                                <h2 className="f5 fw4 gray mt0">To NSBM Accommodation Rental Service</h2>
                            </div>
                        </article>

                        <article className="m-100 mt3 ml2 mr2 bg-light-gray br3 ba b--black-10">
                            <div className="tc">
                                <h1 className="mt0 f4 f3-m f2-ns ">Accommodations</h1>
                                <div className="m-100 vh-50">
                                    <Map defaultCenter={position} defaultZoom={12}>
                                    </Map>
                                </div>
                            </div>
                        </article>

                    </div>
                </article>

                <h2 className="tc tracked">Articles</h2>
                <article className="bg-light-gray" style={{ display: 'flex' }}>
                    <section className="mw7 center avenir">
                        <article className="bt bb b--black-10">
                            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                <div className="flex flex-column flex-row-ns">
                                    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                        <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="dimly lit room with a computer interface terminal." />
                                    </div>
                                    <div className="w-100 w-60-ns pl3-ns">
                                        <h1 className="f3 fw1 baskerville mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
                                        <p className="f6 f5-l lh-copy">
                                            The tech giant says it is ready to begin planning a quantum
                                            computer, a powerful cpu machine that relies on subatomic particles instead
                                            of transistors.
                                        </p>
                                        <p className="f6 lh-copy mv0">By Robin Darnell</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="bb b--black-10">
                            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                <div className="flex flex-column flex-row-ns">
                                    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                        <img src="http://mrmrs.github.io/photos/warehouse.jpg" className="db" alt="warehouse with stacked shelves." />
                                    </div>
                                    <div className="w-100 w-60-ns pl3-ns">
                                        <h1 className="f3 fw1 baskerville mt0 lh-title">Warehouse Prices Are Fast on the Rise</h1>
                                        <p className="f6 f5-l lh-copy">
                                            A warehouse is a commercial building for storage of goods.
                                            Warehouses are used by manufacturers, importers, exporters,
                                            wholesalers, transport businesses, customs, etc. They are
                                            usually large plain buildings in industrial areas of cities,
                                            towns and villages.
                                        </p>
                                        <p className="f6 lh-copy mv0">By Robin Darnell</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="bb b--black-10">
                            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                <div className="flex flex-column flex-row-ns">
                                    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                        <img src="http://mrmrs.github.io/photos/whale.jpg" className="db" alt="whale's tale coming crashing out of the water." />
                                    </div>
                                    <div className="w-100 w-60-ns pl3-ns">
                                        <h1 className="f3 fw1 baskerville mt0 lh-title">Giant Whale Invests Huge Money to Build a Computer Out of Plankton</h1>
                                        <p className="f6 f5-l lh-copy">
                                            Whale is the common name for a widely distributed and diverse
                                            group of fully aquatic placental marine mammals. They are an
                                            informal grouping within the infraorder Cetacea, usually
                                            excluding dolphins and porpoises.
                                        </p>
                                        <p className="f6 lh-copy mv0">By Robin Darnell</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </section>
                </article>

                <footer className="bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>

            </>
        </APIProvider>
    );
}

export default AdminDashbord;
