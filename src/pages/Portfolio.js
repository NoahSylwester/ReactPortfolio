import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import portfolioItems from '../portfolio-items.json';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioItemThumbnails from '../components/PortfolioItemThumbnails';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

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
    const isDesktop = useMediaQuery({
        query: '(min-width: 755px)'
      })

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
            <div style={isDesktop ? styles.pageBodyDesktop : styles.pageBodyMobile}>
                {
                isDesktop
                    ?
                <>
                    <Arrow onClick={() => handleArrowClick('back')}>←</Arrow>
                    <PortfolioItem indexer={{ index, setIndex, length: portfolioItems.length }} item={portfolioItems[index]} key={portfolioItems[index]}/>
                    <Arrow onClick={() => handleArrowClick('forward')}>→</Arrow>
                </>
                    :
                <>
                    {portfolioItems.map((item, i) => <PortfolioItem mobile key={"mobileitem" + i} item={item} />)}
                </>
                }
            </div>
            {
                isDesktop
                ?
                <PortfolioItemThumbnails items={portfolioItems} currentIndex={index} changeIndex={(index) => setIndex(index)} />
                :
                <></>
            }
        </div>
    )
}

const styles = {
    page: {
        backgroundColor: 'white',
        height: '100%',
    },
    pageBodyDesktop: {
        padding: "100px 100px 0px 100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    pageBodyMobile: {
        padding: "100px 20px 0px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
}