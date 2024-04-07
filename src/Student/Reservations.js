import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReservationsCard from "../ReservationsCard";

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

const Reservations = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Fetch all property details from the database
        fetch('http://localhost:3000/WardenProperty') // Replace with your actual endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch property details');
                }
                return response.json();
            })
            .then(data => {
                console.log('Properties data:', data); // Log properties data
                setProperties(data); // Set the properties state with fetched data
            })
            .catch(error => {
                console.error('Error fetching property details:', error);
            });

    }, []);

    return (

        <>
            <nav className="db dt-l w-100 tr border-box ph5-l bg-dark-blue">
                <button className=" dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h2 w2 dib v-mid" alt="Student logo" />
                    {userEmail}
                </button>
            </nav>

            <article style={{ display: 'flex' }}>

                <div className="fl w-20 bg-navy" id="column_one" style={{ flexShrink: 0, overflow: "auto" }}>
                    <div>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Dashbord?email=${userEmail}`} title="Dashbord">Dashbord</Link>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Profile?email=${userEmail}`} title="Profile">Profile</Link>
                        <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Reservations?email=${userEmail}`} title="Reservations">Reservations</Link>
                        <Link className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to="/Home">Log Out</Link>
                    </div>
                </div>

                <div className="fl w-50 w-75-ns bg-light-gray" id="column_two" onLoad={useEffect} style={{ flexGrow: 1 }}>
                    <div>
                        <button className="f6 br2 ph3 pv2 mb2 dib black bg-light-gray" id="HideBtn" onClick={Hide}>Hide Blocks</button>
                    </div>
                    <h1 className="tc ttu tracked">properties</h1>
                    <div className="tc bg-light-gray m0 pb4">

                        {/* Render PropertyCard components for each property */}
                        {properties.map((property, index) => (
                            <ReservationsCard key={index} property={property} />
                        ))}
                    </div>

                </div>
            </article>
            <footer className="bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999">
                <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>

        </>

    );
}

export default Reservations;