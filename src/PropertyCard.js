import React from "react";

const PropertyCard = ({ property }) => {
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
                            <img src={property.photos} className="w-100" alt="Article" />
                        </div>
                    </div>
                </article>

            </section>
        </>
    );
}

export default PropertyCard;
