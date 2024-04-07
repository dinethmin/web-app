import React from "react";

const PropertyCard = ({ property }) => {

    const handleAccept = () => {
        const id = property.id; // Get the id of the property

        fetch(`http://localhost:3000/WardenProperty/${id}/Accept`, { // Construct the correct endpoint URL
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // Set content type
            },
            body: JSON.stringify({ id }) // Send the id in the request body
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to accept property');
                }
                return response.json();
            })
            .then(data => {
                window.alert("Property " + { id } + " accepted", data);
            })
            .catch(error => {
                console.error('Error accepting property:', error);
            });
    };

    const handleReject = () => {
        const id = property.id; // Get the id of the property

        fetch(`http://localhost:3000/WardenProperty/${id}/Reject`, { // Construct the correct endpoint URL
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // Set content type
            },
            body: JSON.stringify({ id }) // Send the id in the request body
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to accept property');
                }
                return response.json();
            })
            .then(data => {
                window.alert("Property " + { id } + " Rejected", data);
            })
            .catch(error => {
                console.error('Error accepting property:', error);
            });
    };

    return (
        <>
            <section className="mw7 center">

                <article className="bt bb b--black-10 ph3 ph0-l">
                    <div className="flex flex-column flex-row-ns">
                        <div >
                            <h1 className="f7 f3-ns athelas mt0 lh-title">Property Name: {property.name}</h1>
                            <p className="f7 f4-l lh-copy athelas">Description: {property.description}</p>
                            <p className="f7 f4-l lh-copy athelas">Address: {property.address}</p>
                            <p className="f7 f4-l lh-copy athelas">Phone: {property.phone}</p>
                            <p className="f7 f4-l lh-copy athelas">Facilities: {property.facilities}</p>
                            <p className="f7 f4-l lh-copy athelas">Available For: {property.availablefor}</p>
                            <p className="f7 b f4-l lh-copy athelas">Price: {property.price}</p>
                            <p className="f7 f4-l lh-copy athelas">Status: {property.status}</p>
                            <img src={property.photos} className="w-100" alt="Article" />
                            <div>
                                {/*}<p>ID: {property.id}</p>{*/}
                                <input className="tc grow no-underline br-pill pv2 mb2 dib white f4-ns w4-ns bg-green mr2" type="submit" id={property.id} value="Accept" onClick={handleAccept} />
                                <input className="tc grow no-underline br-pill pv2 mb2 dib white f4-ns w4-ns bg-red" type="submit" id={property.id} value="Reject" onClick={handleReject} />
                            </div>
                        </div>

                    </div>
                </article>

            </section>
        </>
    );
}

export default PropertyCard;
