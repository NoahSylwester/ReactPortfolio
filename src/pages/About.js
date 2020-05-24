import React from 'react';
import Navbar from "../components/Navbar";

export default function About(props) {

    return (
        <div style={styles.page}>
            <Navbar />
            <div style={styles.pageBody}>
                <h1>About</h1>
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
    }
}