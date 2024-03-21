import React from "react";


const Hide = () => {
    const column1 = document.getElementById("column_one");
    const column2 = document.getElementById("column_two");
    const btn = document.getElementById("HideBtn")
    column1.style.display = 'none';
    column2.style.width = '100%';
    
};

const Dashbord = () => {
    return (
        <>
            <nav className="db dt-l w-100 tr border-box ph5-l bg-green">
                <button className=" dtc-l v-mid mid-gray link dim b--none bg-transparent tl-l" title="Home">
                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="dib w2 h2 br-100" alt="Student logo" />
                    hiii
                </button>
            </nav>

            <article className="cf">
                <div className="fl w-20 bg-near-white vh-100 tc" id="column_one">
                    <h1>Column One</h1>
                </div>
                <div className="fl w-80 bg-light-gray vh-100" id="column_two">
                    <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black" id="HideBtn" onClick={Hide}>Hide</button>
                    <h1 className="tc">Column Two</h1>
                </div>
            </article>

        </>
    );
}

export default Dashbord;