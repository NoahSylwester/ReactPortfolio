import React from 'react';
import Navbar from "../components/Navbar";
import portfolioItems from '../portfolio-items.json';
import PortfolioItem from '../components/PortfolioItem';

export default function Portfolio(props) {

    return (
        <div>
            <Navbar />
            <div style={styles.pageBody}>
                <h1>Portfolio</h1>
                {portfolioItems.map(item => <PortfolioItem item={item} />)}
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