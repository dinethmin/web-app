import React from "react";

const UserReservationsCard = ({ property }) => {
    const handleAccept = () => {

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
                    <p className="f7 b f4-dim lh-title">User: {property.email}</p>
                    <img src={property.photos} className="w-100" alt="Article" />
                    <div>
                        {/*}<p>ID: {property.id}</p>{*/}
                        <input className="tc grow no-underline br-pill pv2 mb2 dib white f4-ns w4-ns bg-green mr2" type="submit" id={property.id} value="Accept" onClick={handleAccept} />

                    </div>
                </div>
            </div>
        </>
    );
}

export default UserReservationsCard;