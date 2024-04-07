import React, { useState, useEffect } from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Link } from "react-router-dom";
import Card from "../Card";
import { useLocation } from "react-router-dom";

const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

const Dashboard = () => {
    const [height, setHeight] = useState(0); // Height state
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const column2 = document.getElementById('column_two');
        if (column2) {
            setHeight(column2.offsetHeight);
        }

        // Fetch articles from the backend API
        fetch('http://localhost:3000/Articles')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                return response.json();
            })
            .then(data => {
                setArticles(data); // Assuming the response data is an array of articles
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, []);

    const handleHideBlocks = () => {
        const column1 = document.getElementById("column_one");
        const column2 = document.getElementById("column_two");
        const btn = document.getElementById("HideBtn");

        if (btn.innerHTML === "Hide Blocks") {
            column1.style.display = 'none';
            column2.style.width = '100%';
            btn.innerHTML = "Show Blocks";
        } else {
            column1.style.display = 'inline';
            column2.style.width = '80%';
            btn.innerHTML = "Hide Blocks";
        }
    };

    return (
        <APIProvider apiKey={"AIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
            <>
                <nav className="db dt-l w-100 tr border-box ph5-l bg-dark-blue">
                    <button className=" dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                        <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h2 w2 dib v-mid" alt="Student logo" />
                        {userEmail}
                    </button>
                </nav>

                <article style={{ display: 'flex' }}>

                    <div className="fl w-20 bg-navy" id="column_one" style={{ flexShrink: 0, height: height }}>
                        <div>
                            <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Dashbord?email=${userEmail}`} title="Dashbord">Dashbord</Link>
                            <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Profile?email=${userEmail}`} title="Profile">Profile</Link>
                            <Link className="link f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to={`/Reservations?email=${userEmail}`} title="Reservations">Reservations</Link>
                            <Link className="f6 f3-ns fw6 tc mt4 db white no-underline underline-hover" to="/Home">Log Out</Link>
                        </div>
                    </div>

                    <div className="fl w-80 bg-light-gray pb4" id="column_two" style={{ flexGrow: 1 }}>
                        <div>
                            <button className="f6 br2 ph3 pv2 mb2 dib black bg-light-gray" id="HideBtn" onClick={handleHideBlocks}>Hide Blocks</button>
                        </div>

                        <article className="m-100 ml2 mr2 bg-light-gray br3 ba b--black-10">
                            <div className="tc">
                                <img src="https://students.nsbm.ac.lk/img/1nsbm.png" className="h3 w7 dib ba b--black-05 pa2" alt="kitty staring at you" />
                                <h3 className="ma0 tc">Welcome Student</h3>
                                <h2 className="f5 fw4 gray mt0">To NSBM Accommodation Rental Service</h2>
                            </div>
                        </article>

                        <article className="m-100 mt3 ml2 mr2 bg-light-gray br3 ba b--black-10">
                            <div className="tc">
                                <h1 className="mt0">Accommodations</h1>
                                <div className="m-100 vh-50">
                                    <Map defaultCenter={position} defaultZoom={12}>
                                    </Map>
                                </div>
                            </div>
                        </article>

                        {/* Articles section */}
                        <h2 className="tc tracked mt0 mb0 f2 bg-light-gray">Articles</h2>
                        <div className="tc bg-light-gray m0 pb4">
                            {articles.map((article, index) => (
                                <Card
                                    key={index}
                                    title={article.headline}
                                    url={`data:image/jpeg;base64,${article.content_img}`} // Assuming this is the URL of the article's image
                                    by={article.author}
                                />
                            ))}
                        </div>

                    </div>
                </article>
                {/* Your footer */}
                <footer className="bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>

            </>
        </APIProvider>
    );
}

export default Dashboard;
