import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import portfolioItems from '../portfolio-items.json';
import proficiencies from '../proficiencies.json';
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

const FilterInput = styled.select`
    box-shadow: 0px 1px 2px lightgrey;
    height: 40px;
    padding: 0px 10px;
    margin-right: 5px;
    :focus {
        outline: none;
    }
`
const FilterButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(256,256,256,0.4);
    box-shadow: 0px 1px 2px lightgrey;
    transition: 0.2s;
    margin-right: 5px;
    :hover {
        background-color: rgba(250,250,250,1);
        box-shadow: inset 0px 1px 1px lightgrey;
    }
    :active {
        background-color: rgba(240,240,240,1);
        box-shadow: inset 0px 1px 4px darkgrey;
    }
    :focus {
        outline: none;
    }
`

export default function Portfolio(props) {

    const [index, setIndex] = useState(0);
    const [matchedPortfolioItems, setMatchedPortfolioItems] = useState(portfolioItems);
    const [filterQuery, setFilterQuery] = useState('')
    const isDesktop = useMediaQuery({
        query: '(min-width: 755px)'
      })

    const handleArrowClick = (type) => {
        switch (type) {
            case 'back':
                setIndex(index - 1 >= 0 ? index - 1 : matchedPortfolioItems.length - 1);
                return;
            case 'forward': 
                setIndex(index + 1 <= matchedPortfolioItems.length - 1 ? index + 1 : 0);
                return;
            default:
                setIndex(index);
                return;
        }
    }

    const handleFilter = () => {
        if (filterQuery) {
            const filteredResults = portfolioItems.filter((item) => {
                return item.technologies.includes(filterQuery);
            })
            setMatchedPortfolioItems(filteredResults)
        }
    }

    const handleReset = () => {
        setMatchedPortfolioItems(portfolioItems)
    }

    return (
        <div style={styles.page}>
            <Navbar Portfolio />
            <div style={styles.filter}>
                <p style={{ marginBottom: 5 }}>Filter by technology</p>
                <div>
                    <FilterInput onChange={event => setFilterQuery(event.target.value)}>
                        <option>Select one</option>
                        {proficiencies.map(proficiency => proficiency.inProject ? <option value={proficiency.technology}>{proficiency.technology}</option> : null)}
                    </FilterInput>
                    <FilterButton onClick={handleFilter}>Go</FilterButton>
                    <FilterButton onClick={handleReset}>Undo</FilterButton>
                </div>
            </div>
            <div style={isDesktop ? styles.pageBodyDesktop : styles.pageBodyMobile}>
                {
                isDesktop
                    ?
                <>
                    <Arrow onClick={() => handleArrowClick('back')}>←</Arrow>
                    <PortfolioItem indexer={{ index, setIndex, length: matchedPortfolioItems.length }} item={matchedPortfolioItems[index]} key={matchedPortfolioItems[index]}/>
                    <Arrow onClick={() => handleArrowClick('forward')}>→</Arrow>
                </>
                    :
                <>
                    {matchedPortfolioItems.map((item, i) => <PortfolioItem mobile key={"mobileitem" + i} item={item} />)}
                </>
                }
            </div>
            {
                isDesktop
                ?
                <PortfolioItemThumbnails items={matchedPortfolioItems} currentIndex={index} changeIndex={(index) => setIndex(index)} />
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
        padding: "10px 100px 0px 100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    pageBodyMobile: {
        padding: "10px 20px 0px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    filter: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px auto 0 auto",
        width: 300,
    }
}