import React, { useState } from "react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

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

const Dashboard = () => {
    const [markers, setMarkers] = useState([]);
    const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

    const handleMapClick = (event) => {
        console.log("Clicked event:", event); // Debugging statement
    
        // Check if the event object and its detail property are defined
        if (event && event.detail && event.detail.latLng) {
            const clickedPosition = {
                lat: event.detail.latLng.lat,
                lng: event.detail.latLng.lng
            };
            console.log("Clicked position:", clickedPosition); // Debugging statement
            setMarkers([...markers, clickedPosition]);
        } else {
            console.error("Invalid click event:", event); // Debugging statement
        }
    };
    
    

    return (
        <APIProvider apiKey={"AIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
            <>
                <nav className="db dt-l w-100 tr border-box ph5-l bg-dark-blue">
                    <button className=" dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                        <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h2 w2 dib v-mid" alt="Student logo" />
                        student@gmail.com
                    </button>
                </nav>

                <article className="cf">
                    <div className="fl w-20 bg-navy vh-100 tc" id="column_one">
                        <div>
                            <a className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" href="#0">Dashboard</a>
                            <a className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" href="#0">Profile</a>
                            <a className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" href="#0">Reservations</a>
                            <a className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" href="#0">Log Out</a>
                        </div>
                    </div>
                    <div className="fl w-80 bg-light-gray vh-100" id="column_two">
                        <div>
                            <button className="f6 br2 ph3 pv2 mb2 dib black bg-light-gray" id="HideBtn" onClick={Hide}>Hide Blocks</button>
                        </div>
                        <article className="m-100 ml2 mr2 bg-light-gray br3 ba b--black-10">
                            <div className="tc">
                                <img src="https://students.nsbm.ac.lk/img/1nsbm.png" className="h3 w7 dib ba b--black-05 pa2" alt="kitty staring at you" />
                                <h3 className="ma0 tc">Welcome Student</h3>
                                <h2 className="f5 fw4 gray mt0">To NSBM Accommodation Rental Service</h2>
                            </div>
                        </article>
                        <div className="mt3">
                            <div className="m-100 vh-50">
                                <Map defaultCenter={position} defaultZoom={12} onClick={handleMapClick}>
                                    {markers.map((marker, index) => (
                                        <Marker key={index} position={marker} />
                                    ))}
                                </Map>
                            </div>
                        </div>
                    </div>
                </article>
                <footer className="pt0 mt0 pb0 ph3 ph5-m ph6-l bg-light-gray">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>
            </>
        </APIProvider>
    );
}

export default Dashboard;