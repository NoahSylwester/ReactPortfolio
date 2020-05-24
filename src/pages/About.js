import React from 'react';
import Navbar from "../components/Navbar";

export default function About(props) {

    return (
        <div style={styles.page}>
            <Navbar />
            <div style={styles.pageBody}>
                <h1>About</h1>
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
        padding: 100
    }
}