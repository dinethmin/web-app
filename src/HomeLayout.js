import React from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { ApiKey } from "./Apikey";

const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

const HomeLayout = () => {
    return (
        <>
            <APIProvider apiKey={ApiKey}>
                <article
                    className="vh-100 dt w-100 tc br5 dark-green"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #00449E, #137752)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px',
                        padding: '30px',
                        color: '#ffffff' // optional: change text color
                    }}
                >
                    <h1 className="fw6 f3 f2-ns grow lh-title ttu pt6 tc ph3">
                        Welcome to nsbm Accommodation Rental Service
                    </h1>
                    <h2 className="fw6 grow lh-copy tc ph3">
                        Seeking Accommodation ?...
                    </h2>
                    <h2 className="fw6 grow lh-copy tc ph3">
                        Need a closer, safer, and a more comfortable place ?..
                    </h2>
                    <h3 className="fw6 grow tc">
                        Visit us and find your homelike place...
                    </h3>
                    <div className="w-100 vh-50 pb6 mb0 grow">
                        <Map defaultCenter={position} defaultZoom={15}>

                        </Map>
                    </div>
                </article>

                <footer className="pt2 pb0 ph3 ph5-m ph6-l bg-light-gray">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>
            </APIProvider>
        </>
    );
}

export default HomeLayout;
