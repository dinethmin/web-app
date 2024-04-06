import React from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Link, useLocation } from "react-router-dom";
import './Admin.css';
import Card from "../Card";

const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

const AdminDashbord = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');

    return (
        <APIProvider apiKey={"AIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
            <>
                <nav className="db dt-l tr w-100 border-box ph5-l bg-dark-blue">
                    <div className="fl f7 f4-m f3-ns">
                        <Link className="link dim white dib mr3" to={`/AdminDashbord?email=${userEmail}`} title="AdminDashbord">Dashbord</Link>
                        <Link className="link dim white dib mr3" to={`/AdminProfile?email=${userEmail}`} title="AdminProfile">Profile</Link>
                        <div className="dropdown1 link white dib mr3">
                            <label className="dropbtn1">Create Account</label>
                            <div className="dropdown-content1">
                                <Link to={`/AddLandlord?email=${userEmail}`}>Landlord</Link>
                                <Link to={`/AddWarden?email=${userEmail}`}>Warden</Link>
                                <Link to={`/AddStudent?email=${userEmail}`}>Student</Link>
                            </div>
                        </div>
                        <Link className="link dim white dib mr3" to={`/PostArticles?email=${userEmail}`} title="PostArticles">Articles</Link>
                        <Link className="link dim white dib" to="/Home">Log Out</Link>
                    </div>
                    <button className="dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                        <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h1 w1 h2-ns w2-ns dib v-mid" alt="Student logo" />
                        {userEmail}
                    </button>
                </nav>

                <article style={{ display: 'flex' }}>

                    <div className="fl w-0" id="column_one"></div>

                    <div className="fl w-80 bg-light-gray pb4" id="column_two" style={{ flexGrow: 1 }}>

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

                <h2 className="tc tracked mt0 mb0 f2 bg-light-gray">Articles</h2>
                <div className="tc bg-light-gray m0 pb4">
                    <Card
                        title={"Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction"}
                        url={"http://mrmrs.github.io/photos/cpu.jpg"}
                        by={"Robin Darnell"}
                    />
                    <Card
                        title={"Warehouse Prices Are Fast on the Rise"}
                        url={"http://mrmrs.github.io/photos/warehouse.jpg"}
                        by={"Robin Darnell"}
                    />
                    <Card
                        title={"Giant Whale Invests Huge Money to Build a Computer Out of Plankton"}
                        url={"http://mrmrs.github.io/photos/whale.jpg"}
                        by={"Robin Darnell"}
                    />
                </div>

                <footer className="bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>

            </>
        </APIProvider>
    );
}

export default AdminDashbord;
