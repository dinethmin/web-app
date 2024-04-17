import React from "react";

const Card = ({ title, url, by }) => {
    // Convert Buffer data to base64 string
    const base64String = arrayBufferToBase64(url);
    const imageUrl = `data:image/jpeg;base64,${base64String}`;

    return (
        <>
            <div className="tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5 w5">
                <img src={imageUrl} className="w-100" alt="Article" />
                <div className="">
                    <a href="##" className="link dim lh-title">{title}</a>
                    <p className="dark-gray">{by}</p>
                </div>
            </div>
        </>
    );
}

// Function to convert ArrayBuffer to base64 string
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

export default Card;
