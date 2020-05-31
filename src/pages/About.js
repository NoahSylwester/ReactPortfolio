import React from 'react';
import Navbar from "../components/Navbar";

export default function About() {

    return (
        <div style={styles.page}>
            <Navbar About />
            <div style={styles.pageBody}>
                <img style={styles.img} src="https://noahsylwester.github.io/Portfolio/assets/images/profile_pic%20copy.jpg"></img>
                <p style={styles.proficiencies}>
                    Proficient in <br />
                    <strong>React, React Native, Javascript, Node, HTML5, CSS3, SQL, NoSQL, REST, Python, R</strong>
                </p>
                <p style={styles.description}>
                    Fullstack web developer with a background in applied physics powering my problem-solving skills. Recently
                    earned a certificate in Full Stack Development from the University of Oregon, with proficiency in JavaScript,
                    HTML5, CSS, and React. Known for being easy to work with, and for my driving work ethic and innovative
                    problem-solving abilities. With each project, my aim is to best engage my audience for an impactful
                    user experience.
                    <br /><br />
                    I recently led a team of four in agile development style to develop a full stack React Native app that
                    provides a social media platform for PNW hikers and explorers. Looking forward to contributing in the future
                    as part of a hard-working, quality-obsessed team to build a better user experience.
                </p>
            </div>
        </div>
    )
}

const styles = {
    page: {
        backgroundColor: 'white',
        height: "100%",
    },
    pageBody: {
        padding: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: "200px",
        width: "200px",
        borderRadius: "100px",
    },
    proficiencies: {
        width: "70%",
        padding: 20,
        textAlign: "center"
    },
    description: {
        width: "80%",
        paddingLeft: 10,
        borderLeft: "1px solid lightgrey"
    }
}