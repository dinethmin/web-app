import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Link, useLocation } from "react-router-dom";
import PropertyCard from "../PropertyCard";
import { ApiKey } from "../Apikey";

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
    /*const [height, setHeight] = useState(0); // Height state*/
    const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');
    /*const [selectedMarkerData, setSelectedMarkerData] = useState(null);*/
    const [properties, setProperties] = useState([]);


    useEffect(() => {
        // Fetch markers from the backend API
        fetch('http://localhost:3000/Markers')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch markers');
                }
                return response.json();
            })
            .then(data => {
                console.log('Markers data:', data); // Log markers data
                const parsedMarkers = data.map(item => {
                    try {
                        let markersArray;
                        // Check if markers property is already an array
                        if (Array.isArray(item.markers)) {
                            markersArray = item.markers;
                        } else {
                            // Parse markers string to JSON
                            markersArray = JSON.parse(item.markers.replace(/^"|"$/g, '').replace(/\\"/g, '"'));
                        }
                        // Ensure that the markersArray is an array
                        if (!Array.isArray(markersArray)) {
                            throw new Error('Markers data is not an array');
                        }
                        // Ensure that each marker has lat and lng properties
                        const validMarkers = markersArray.filter(marker => {
                            return typeof marker.lat === 'number' && typeof marker.lng === 'number';
                        });
                        return validMarkers;
                    } catch (error) {
                        console.error('Error parsing markers:', error);
                        return null;
                    }
                });
                setMarkers(parsedMarkers.filter(marker => marker !== null));
            })
            .catch(error => {
                console.error('Error fetching markers:', error);
            });

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
    /*
        // Function to fetch property details when a marker is clicked
        const handleMarkerClick = (propertyId) => {
            // Fetch property details based on propertyId
            fetch(`http://localhost:3000/WardenProperty/${propertyId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch property details');
                    }
                    return response.json();
                })
                .then(property => {
                    setSelectedMarkerData(property); // Set the selected property data
                })
                .catch(error => {
                    console.error('Error fetching property details:', error);
                });
        };
    */

    // Function to handle marker click and set selected property data
    /*const handleMarkerClick = (property) => {
        setSelectedMarkerData(property);
    };*/


    return (
        <APIProvider apiKey={ApiKey}>
            <>

                <nav className="db dt-l tr w-100 border-box ph5-l bg-dark-blue">
                    <div className="fl f7 f4-m f3-ns">
                        <Link className="link dim white dib mr3" to={`/WardenDashbord?email=${userEmail}`} title="WardenDashbord">Dashbord</Link>
                        <Link className="link dim white dib mr3" to={`/WardenProfile?email=${userEmail}`} title="WardenProfile">Profile</Link>
                        <Link className="link dim white dib mr3" to={`/WardenProperty?email=${userEmail}`} title="WardenProperty">Property</Link>
                        <Link className="link dim white dib" to="/Home">Logout</Link>
                    </div>
                    <button className="dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                        <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h1 w1 h2-ns w2-ns dib v-mid" alt="Student logo" />
                        {userEmail}
                    </button>
                </nav>

                <article style={{ display: 'flex' }}>

                    <div className="f6 f4-ns w-50 w-25-ns vh-100 bg-washed-green" id="column_one" style={{ flexShrink: 0, overflow: "auto"}}>
                        <div className="pa2">
                            <h1 className="tc">Properties</h1>
                            {/* Render PropertyCard components for each property */}
                            {properties.map((property, index) => (
                                <PropertyCard key={index} property={property} />
                            ))}
                        </div>
                    </div>

                    <div className="fl w-50 w-75-ns bg-light-gray" id="column_two" onLoad={useEffect} style={{ flexGrow: 1 }}>

                        <div>
                            <button className="f6 br2 ph3 pv2 mb2 dib black bg-light-gray" id="HideBtn" onClick={Hide}>Hide Blocks</button>
                        </div>
                        <article className="m-100 ml2 mr2 bg-light-gray br3ba b--black-10">
                            <div className="tc">
                                <div className="m-100 vh-100">
                                    <Map defaultCenter={position} defaultZoom={15}>
                                        {/* Render markers */}
                                        {markers.map((marker, index) => {
                                            // Check if marker position is wrapped in an array
                                            const positionData = Array.isArray(marker) ? marker[0] : marker;
                                            // Ensure that marker position contains valid latitude and longitude values
                                            if (typeof positionData.lat === 'number' && typeof positionData.lng === 'number') {
                                                return (
                                                    <Marker key={index} position={{ lat: positionData.lat, lng: positionData.lng }} />
                                                );
                                            } else {
                                                console.error('Invalid marker position:', marker);
                                                return null;
                                            }
                                        })}
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