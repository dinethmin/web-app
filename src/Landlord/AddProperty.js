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

const AddProperty = () => {
    const [markers, setMarkers] = useState([]);
    const [height, setHeight] = useState(0); // Height state
    const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');

    const ClearOutput = () => {
        const Name = document.getElementById('Property_Name');
        const Phone = document.getElementById('Phone_No');
        const Description = document.getElementById('Description');
        const Facilities = document.getElementById('Available_Facilities');
        const Available_For = document.getElementById('Available_For');
        const Price = document.getElementById('Price');
        const Address = document.getElementById('Address');
        const Photos = document.getElementById('Photos');

        if (!(Description === "") || !(Facilities === "") || !(Name === "") || !(Available_For === "") || !(Price === "") || !(Address === "") || !(Photos === null)) {
            Name.value = "";
            Phone.value = "";
            Description.value = "";
            Facilities.value = "";
            Available_For.value = "";
            Price.value = "";
            Address.value = "";
            Photos.value = null;
        }
        setMarkers([]);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(); // Create a FormData object to store form data

        formData.append('name', document.getElementById('Property_Name').value);
        formData.append('description', document.getElementById('Description').value);
        formData.append('address', document.getElementById('Address').value);
        formData.append('facilities', document.getElementById('Available_Facilities').value);
        formData.append('phone', document.getElementById('Phone_No').value);
        formData.append('availableFor', document.getElementById('Available_For').value);
        formData.append('price', document.getElementById('Price').value);
        formData.append('landlord', userEmail);

        const photosInput = document.getElementById('Photos');
        for (let i = 0; i < photosInput.files.length; i++) {
            formData.append('photos', photosInput.files[i]); // Append each selected file to the FormData object
        }

        formData.append('markers', JSON.stringify(markers)); // Convert markers array to JSON and append to FormData

        // Send the form data to your backend server
        fetch('http://localhost:3000/AddProperty', {
            method: 'POST',
            body: formData // Send FormData instead of JSON.stringify
        })
            .then(response => response.json())
            .then(data => {
                // Handle successful response
                window.alert("Property added successfully");
                ClearOutput();
            })
            .catch(error => {
                // Handle error
                console.error('Error adding property:', error);
            });
    };

    useEffect(() => {
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
                <nav className="db dt-l w-100 tr border-box ph5-l bg-dark-blue">
                    <button className=" dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                        <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h2 w2 dib v-mid" alt="Student logo" />
                        Landlord@gmail.com
                    </button>
                </nav>

                <article style={{ display: 'flex' }}>
                    <div className="fl w-20 bg-navy" id="column_one" style={{ flexShrink: 0, height: height }}>
                        <div>
                            <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/LandlordDashbord?email=${userEmail}`} title="LandlordDashbord">Dashbord</Link>
                            <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/LandlordProfile?email=${userEmail}`} title="LandlordProfile">Profile</Link>
                            <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/AddProperty?email=${userEmail}`} title="AddProperty">Property</Link>
                            <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/LandlordReservations?email=${userEmail}`} title="LandlordReservations">Reservations</Link>
                            <Link className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to="/Home">Log Out</Link>
                        </div>
                    </div>
                    <div className="fl w-80 bg-light-gray" id="column_two" onLoad={useEffect} style={{ flexGrow: 1 }}>

                        <div>
                            <button className="f6 br2 ph3 pv2 mb2 dib black bg-light-gray" id="HideBtn" onClick={Hide}>Hide Blocks</button>
                            <h1 className="ma0 ml4 center tc">Add New Property</h1>
                        </div>
                        <div>
                            <article className="black-80 w-100 tc">
                                <form>
                                    <fieldset id="sign_up" className="ba2 b--transparent ph0 mh0 w-100 pa2 pr2">
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor="Property_Name">Property Name</label>
                                            <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="Property_Name" id="Property_Name" />
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor="Description">Description</label>
                                            <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="Description" id="Description" />
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor="Address">Address</label>
                                            <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="Address" id="Address" />
                                        </div>
                                        <div className="mt3 fn fl-ns w-50-ns">
                                            <label className="db fw4 lh-copy f6" htmlFor="Available_Facilities">Available Facilities</label>
                                            <input className="pa2 input-reset ba bg-transparent w-80" type="text" name="Available_Facilities" id="Available_Facilities" />
                                        </div>
                                        <div className="mt3 fn fl-ns w-50-ns">
                                            <label className="db fw4 lh-copy f6" htmlFor="Phone_No">Phone No</label>
                                            <input className="pa2 input-reset ba bg-transparent w-80" type="tel" name="Phone_No" id="Phone_No" />
                                        </div>
                                        <div className="mt3 fn fl-ns w-50-ns">
                                            <label className="db fw4 lh-copy f6" htmlFor="Available_For">Available For</label>
                                            <select className="pa2 input-reset ba bg-transparent w-80" id="Available_For" name="Available_For">
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Both">Both</option>
                                            </select>
                                        </div>
                                        <div className="mt3 fn fl-ns w-50-ns">
                                            <label className="db fw4 lh-copy f6" htmlFor="Price">Price</label>
                                            <input className="pa2 input-reset ba bg-transparent w-80" type="number" name="Price" id="Price" />
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor="Photos">Photos</label>
                                            <input className="pa2 input-reset ba bg-transparent w-90" type="file" multiple max="3" name="Photos" id="Photos" />
                                        </div>
                                    </fieldset>

                                    <article className="m-100 mt3 ml2 mr2 bg-light-gray br3 ba b--black-10">
                                        <div className="tc">
                                            <h4 className="db fw4 lh-copy f6 ma0" htmlFor="Enter_Location">Enter Location</h4>
                                            <div className="m-100 vh-50">
                                                <Map defaultCenter={position} defaultZoom={15} onClick={handleMapClick}>
                                                    {markers.map((marker, index) => (
                                                        <Marker key={index} position={marker} />
                                                    ))}
                                                </Map>
                                            </div>
                                        </div>
                                    </article>

                                    <div className="mt3">
                                        <input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4" type="submit" value="Add" onClick={handleFormSubmit} />
                                        <input className="f6 ml4 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4" type="reset" value="Clear" onClick={ClearOutput} />
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </article>
                <footer className="bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>

            </>
        </APIProvider>
    );
}

export default AddProperty;