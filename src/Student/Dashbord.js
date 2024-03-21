import React from "react";


const Hide = () => {
    const column1 = document.getElementById("column_one");
    const column2 = document.getElementById("column_two");
    const btn = document.getElementById("HideBtn")
    if (btn.innerHTML === "Hide") {
        column1.style.display = 'none';
        column2.style.width = '100%';
        btn.innerHTML = "Show";
    } else if (btn.innerHTML === "Show") {
        column1.style.display = 'inline';
        column2.style.width = '80%';
        btn.innerHTML = "Hide";
    }
};

const Dashbord = () => {
    return (
        <>
            <nav className="db dt-l w-100 tr border-box ph5-l bg-dark-blue">
                <button className=" dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h2 w2 dib v-mid" alt="Student logo" />
                    student@gmail.com
                </button>
            </nav>

            <article className="cf">
                <div class="fl w-20 bg-washed-green vh-100 tc" id="column_one">
                    <div>
                        <a class="f6 f3-ns fw6 tc mt4 db navy no-underline underline-hover" href="#0">Edit Profile</a>
                        <a class="f6 f3-ns fw6 tc mt4 db navy no-underline underline-hover" href="#0">Edit Profile</a>
                        <a class="f6 f3-ns fw6 tc mt4 db navy no-underline underline-hover" href="#0">Edit Profile</a>
                        <a class="f6 f3-ns fw6 tc mt4 db navy no-underline underline-hover" href="#0">Edit Profile</a>
                    </div>
                </div>
                <div className="fl w-80 bg-light-gray vh-100" id="column_two">
                    <div>
                        <button className="f6 br2 ph3 pv2 mb2 dib white bg-black" id="HideBtn" onClick={Hide}>Hide</button>
                        <h3 className="ma0 tc">Welcome Student</h3>
                    </div>
                    <h1 className="tc">Column Two</h1>
                </div>
            </article>



            <footer class="pt4 mt0 pb0 ph3 ph5-m ph6-l bg-light-gray">
                <small class="f6 db tc">©<b class="ttu">Created by Group CB</b>., All Rights Reserved</small>
            </footer>
        </>
    );
}

export default Dashbord;