import React from "react";

const Home = () => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/1?size=200x200`} />
            <div>
                <h2>Robot 1</h2>
                <p>robot.1@gmail.com</p>
            </div>
        </div>
    );
}

export default Home;