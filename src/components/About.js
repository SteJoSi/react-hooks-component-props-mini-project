import React from "react";
// import blogData from "../data/blog";

function About({about, image}) {
    // console.log('image', image)
    // console.log('blog', about)
    // const imageUrl = {src ? image : "https://via.placeholder.com/215"} 

    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;