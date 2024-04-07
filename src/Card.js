import React from "react";

const Card = ({ title, url, by }) => {
    return (
        <>
            <div className="tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5 w5">
                <img src={url} className="w-100" alt="Article" />
                <div className="">
                    <a href="##" className="link dim lh-title">{title}</a>
                    <p className="dark-gray">{by}</p>
                </div>
            </div>
        </>
    );
}

export default Card;