import React from 'react';
import Theme from '../theme.json';

export default function Splash(props) {

    return (
        <div style={styles.splash}>
            <div style={styles.titleBox}>
                <h1>Noah Sylwester</h1>
                <h2>// web developer</h2>
            </div>
        </div>
    )
}

const styles = {
    splash: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    titleBox: {
        border: `2px solid ${Theme.color}`,
        padding: 12,
        boxShadow: "1px 3px 5px grey",
        cursor: "pointer"
        // borderRadius: 10,
    }
}