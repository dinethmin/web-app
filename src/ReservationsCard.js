import React from "react";

const ReservationsCard = ({ property, email }) => {

    const handleReserve = () => {
        const id = property.id; // Get the id of the property

        fetch(`http://localhost:3000/WardenProperty/${id}/${email}/Reserve`, { // Construct the correct endpoint URL
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // Set content type
            },
            body: JSON.stringify({ id, email }) // Send the id and email in the request body
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to reserve property');
                }
                return response.json();
            })
            .then(data => {
                window.alert(`Property ${id} Reserved`,data);
            })
            .catch(error => {
                console.error('Error reserving property:', error);
            });
    };


    return (
        <>
            <div className="tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-3 w5">
                <div className="w-100">
                    <h1 className="f7 f3-ns dim lh-title">Name: {property.name}</h1>
                    <p className="f7 f4-l dim lh-title">Description: {property.description}</p>
                    <p className="f7 f4-l dim lh-title">Address: {property.address}</p>
                    <p className="f7 f4-l dim lh-title">Phone: {property.phone}</p>
                    <p className="f7 f4-l dim lh-title">Facilities: {property.facilities}</p>
                    <p className="f7 f4-l dim lh-title">Available For: {property.availablefor}</p>
                    <p className="f7 b f4-dim lh-title">Price: {property.price}</p>
                    <img src={property.photos} className="w-100" alt="Article" />
                    <div>
                        {/*}<p>ID: {property.id}</p>{*/}
                        <input className="tc grow w4 no-underline br-pill ph3 pv2 mb2 dib white bg-green mr2" type="submit" id={property.id} value="Reserve" onClick={handleReserve} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReservationsCard;