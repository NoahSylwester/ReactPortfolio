import React from 'react';
import Navbar from "../components/Navbar";

export default function About(props) {

    return (
        <div style={styles.page}>
            <Navbar About />
            <div style={styles.pageBody}>
                <img style={styles.img} src="https://noahsylwester.github.io/Portfolio/assets/images/profile_pic%20copy.jpg"></img>
                <p>
                    Blurb about me
                    It's a me!
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
        width: "200px"
    }
}