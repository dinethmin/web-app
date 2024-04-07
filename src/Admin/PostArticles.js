import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Admin.css';

const PostArticles = () => {
    const [headlineContent, setHeadlineContent] = useState("");
    const [authorContent, setAuthorContent] = useState("");
    const [subHeaderContent, setSubHeaderContent] = useState("");
    const [articlecontent, setarticlecontent] = useState("");

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userEmail = queryParams.get('email');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "headline":
                setHeadlineContent(value);
                break;
            case "author":
                setAuthorContent("A story by " + value);
                break;
            case "subheader":
                setSubHeaderContent(value);
                break;
            case "content":
                setarticlecontent(value);
                break;
            default:
                break;
        }
    };

    const handleButton = () => {
        const formData = new FormData();
        formData.append("headline", headlineContent);
        formData.append("author", authorContent);
        formData.append("subHeader", subHeaderContent);
        formData.append("content", articlecontent);
        formData.append("content_img", document.getElementById("content_img").files[0]); // Append files to formdata

        fetch('http://localhost:3000/PostArticles', {
            method: 'post',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(user => {
                if (user.id) {
                    window.alert("Article posted successfuly");
                } else {
                    console.error('Post article failed:', user);
                }
            })
            .catch(error => {
                console.error('Error during posting article:', error);
            });
    };



    return (
        <>
            {/* Navbar start */}
            <div className="flex flex-column vh-100">

                <nav className="db dt-l tr w-100 border-box ph5-l bg-dark-blue">

                    <div className="fl f7 f4-m f3-ns">
                        <Link className="link dim white dib mr3" to={`/AdminDashbord?email=${userEmail}`} title="AdminDashbord">Dashbord</Link>
                        <Link className="link dim white dib mr3" to={`/AdminProfile?email=${userEmail}`} title="AdminProfile">Profile</Link>
                        <div className="dropdown1 link white dib mr3">
                            <label className="dropbtn1">Create Account</label>
                            <div className="dropdown-content1">
                                <Link to={`/AddLandlord?email=${userEmail}`}>Landlord</Link>
                                <Link to={`/AddWarden?email=${userEmail}`}>Warden</Link>
                                <Link to={`/AddStudent?email=${userEmail}`}>Student</Link>
                            </div>
                        </div>
                        <Link className="link dim white dib mr3" to={`/PostArticles?email=${userEmail}`} title="PostArticles">Articles</Link>
                        <Link className="link dim white dib mr2" to="/Home">Log Out</Link>
                    </div>

                    <button className="dtc-l v-mid black dim b--none bg-transparent tl-l" title="Home">
                        <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" className="br-100 ba h1 w1 h2-ns w2-ns dib v-mid" alt="Student logo" />
                        {userEmail}
                    </button>

                </nav>
                {/* Navbar end */}

                {/* Post Articles Section start */}
                <div className="pt2 fl w-100 bg-light-gray" style={{ flexGrow: 1 }}>

                    <h1 className="tc ttu tracked">Post Articles</h1>

                    <div>
                        <article className="helvetica pb4">

                            <header className="bg-light-pink dt w-100">
                                <div
                                    style={{ backgroundImage: "http://mrmrs.github.io/photos/display.jpg" }}
                                    className="dtc v-mid cover ph3 ph4-m ph5-l">
                                    <input className="pa1 mt3 input-reset ba bg-transparent w-80" type="text" name="headline" id="headline" placeholder="Head Line, If you want to enter, leave a space" onChange={handleInputChange} />
                                    <h1 className="f2 f-subheadline-l measure lh-title fw9" id="headline_content">{headlineContent || "A Night Taking Photos at San Franciscos Spooky Ruins of the Sutro Baths"}</h1>
                                    <input className="pa1 input-reset ba bg-transparent w-20" type="text" name="author" id="author" placeholder="Author" onChange={handleInputChange}></input>
                                    <h2 className="f6 fw6 black" id="author_content">{authorContent || "A story by Nancy Drew"}</h2>
                                </div>
                            </header>

                            <div className="serif ph3 ph4-m ph5-l">

                                <input className="pa1 mt3 input-reset ba bg-transparent w-80" type="text" name="subheader" id="subheader" placeholder="Sub Header, If you want to enter, leave a space" onChange={handleInputChange}></input>
                                <p className="lh-copy f5 f3-m f1-l measure center pv4" id="subheader_content">{subHeaderContent || "On March 14, 1896, the Sutro Baths were opened to the public as the world's largest indoor swimming pool establishment."}</p>

                                <div className="f5 f3-m lh-copy">

                                    <div className="cf dt-l w-100 bt b--black-10 pv4">
                                        <div className="dtc-l v-mid mw6 pr3-l">
                                            <input className="pa1 input-reset ba bg-transparent w-80 mb2" type="file" name="content_img" id="content_img" onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (e) => {
                                                        document.getElementById('content_img_preview').src = e.target.result;
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }} />

                                            <img className="w-100" id="content_img_preview" alt="content_img" />
                                        </div>
                                        <div className="dtc-l v-mid f6 f5-m f4-l measure-l">
                                            <input className="pa1 input-reset ba bg-transparent w-70" type="text" name="content" id="content" placeholder="Content, If you want to enter, leave a space" onChange={handleInputChange}></input>
                                            <p className="measure pv4-l center" id="articlecontent">{articlecontent || "Before it burned to the ground, the structure filled a small beach inlet below the Cliff House, also owned by Adolph Sutro at the time. Shortly after closing, a fire in 1966 destroyed the building while it was in the process of being demolished. All that remains of the site are concrete walls, blocked off stairs and passageways, and a tunnel with a deep crevice in the middle. The cause of the fire was arson. Shortly afterwards, the developer left San Francisco and claimed insurance money."}</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="tc">
                                <button className="tc b w5 h2 mb0 bg-dark-blue grow dim ttu" onClick={handleButton}>Post article</button>
                            </div>
                        </article>
                    </div>

                </div>
                {/* Post Articles Section end */}


                {/* Footer start */}
                <footer className="w-100 ph3 ph5-m ph6-l bg-light-gray">
                    <small className="f6 db tc">©<b className="ttu">Created by Group CB</b>., All Rights Reserved</small>
                </footer>
                {/* Footer end */}

            </div>
        </>

    );

}

export default PostArticles;
