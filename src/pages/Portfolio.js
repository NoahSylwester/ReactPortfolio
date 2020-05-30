import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import portfolioItems from '../portfolio-items.json';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioItemThumbnails from '../components/PortfolioItemThumbnails';
import styled from 'styled-components';

const Arrow = styled.div`
    cursor: pointer;
    padding: 5px 9px 5px 9px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0px 1px 3px lightgrey;
    font-size: 2rem;
    :hover {
        background-color: rgba(250,250,250,1);
        box-shadow: 0px 0px 1px lightgrey;
    }
    :active {
        background-color: rgba(245,245,245,1);
        box-shadow: inset 0px 2px 7px lightgrey;
    }
    ::selection {
        color: none;
        background: none;
    }
`


export default function Portfolio(props) {

    const [index, setIndex] = useState(0);

    const handleArrowClick = (type) => {
        switch (type) {
            case 'back':
                setIndex(index - 1 >= 0 ? index - 1 : portfolioItems.length - 1);
                return;
            case 'forward': 
                setIndex(index + 1 <= portfolioItems.length - 1 ? index + 1 : 0);
                return;
            default:
                setIndex(index);
                return;
        }
    }

    return (
        <div style={styles.page}>
            <Navbar Portfolio />
            <div style={styles.pageBody}>
                <Arrow onClick={() => handleArrowClick('back')}>←</Arrow>
                <PortfolioItem item={portfolioItems[index]} />
                <Arrow onClick={() => handleArrowClick('forward')}>→</Arrow>
            </div>
            <PortfolioItemThumbnails items={portfolioItems} currentIndex={index} changeIndex={(index) => setIndex(index)} />
        </div>
    )
}

const styles = {
    page: {
        backgroundColor: 'white',
        height: '100%',
    },
    pageBody: {
        padding: "100px 100px 0px 100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
}