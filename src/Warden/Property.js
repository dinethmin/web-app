import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Link, useLocation } from "react-router-dom";

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

const WardenProperty = () => {
    const [markers, setMarkers] = useState([]);
    const [height, setHeight] = useState(0); // Height state
    const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');

    useEffect(() => {
        // Accessing column_two.offsetHeight after the component has been rendered
        const column2 = document.getElementById('column_two');
        if (column2) {
            setHeight(column2.offsetHeight);
        }
    }, []);

    const handleMapClick = (event) => {
        console.log("Clicked event:", event); // Debugging statement

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
                <nav className="db dt-l tr w-100 border-box ph5-l bg-dark-blue">
                    <div className="fl f7 f4-m f3-ns">
                        <Link className="link dim white dib mr3" to={`/WardenDashbord?email=${userEmail}`} title="WardenDashbord">Dashbord</Link>
                        <Link className="link dim white dib mr3" to={`/WardenProfile?email=${userEmail}`} title="WardenProfile">Profile</Link>
                        <Link className="link dim white dib mr3" to={`/WardenProperty?email=${userEmail}`} title="WardenProperty">Property</Link>
                        <Link className="link dim white dib" to="/Home">Log Out</Link>
                    </div>
                    <button className="dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                        <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h1 w1 h2-ns w2-ns dib v-mid" alt="Student logo" />
                        {userEmail}
                    </button>
                </nav>

                <article style={{ display: 'flex' }}>
                    <div className="fl w-25 bg-washed-green" id="column_one" style={{ flexShrink: 0, height: height }}>

                    </div>
                    <div className="fl w-75 bg-light-gray" id="column_two" onLoad={useEffect} style={{ flexGrow: 1 }}>

                        <div>
                            <button className="f6 br2 ph3 pv2 mb2 dib black bg-light-gray" id="HideBtn" onClick={Hide}>Hide Blocks</button>
                        </div>
                        <article className="m-100 ml2 mr2 bg-light-gray br3ba b--black-10">
                            <div className="tc">
                                <div className="m-100 vh-100">
                                    <Map defaultCenter={position} defaultZoom={15} onClick={handleMapClick}>
                                        {markers.map((marker, index) => (
                                            <Marker key={index} position={marker} />
                                        ))}
                                    </Map>
                                </div>
                            </div>
                        </article>
                    </div>
                </article>
                <footer className="bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>

            </>
        </APIProvider>
    );
}

export default WardenProperty;