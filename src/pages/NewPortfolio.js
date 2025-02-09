import React, { useState, useEffect } from 'react';
import NewNavbar from "../components/NewNavbar";
import rawPortfolioItems from '../portfolio-items.json';
import proficiencies from '../proficiencies.json';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioItemThumbnails from '../components/PortfolioItemThumbnails';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

const Arrow = styled.div`
    color: grey;
    line-height: 0;
    cursor: pointer;
    padding: 9px;
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
    :hover {
        box-shadow: 0px 1px 4px lightgrey;
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

const portfolioItems = rawPortfolioItems.filter(p => p.show);

export default function NewPortfolio(props) {
    const [doneLoading, setDoneLoading] = useState(false)
    const [index, setIndex] = useState(0);
    const [matchedPortfolioItems, setMatchedPortfolioItems] = useState(portfolioItems);
    const [filterQuery, setFilterQuery] = useState('')
    const isDesktop = useMediaQuery({
        query: '(min-width: 755px)'
      })

    // const handleArrowClick = (type) => {
    //     switch (type) {
    //         case 'back':
    //             setIndex(index - 1 >= 0 ? index - 1 : matchedPortfolioItems.length - 1);
    //             return;
    //         case 'forward': 
    //             setIndex(index + 1 <= matchedPortfolioItems.length - 1 ? index + 1 : 0);
    //             return;
    //         default:
    //             setIndex(index);
    //             return;
    //     }
    // }

    const handleFilter = () => {
        if (filterQuery) {
            const filteredResults = portfolioItems.filter((item) => {
                return item.technologies.includes(filterQuery);
            })
            setIndex(0);
            setMatchedPortfolioItems(filteredResults)
        }
        else {
            handleReset();
        }
    }

    const handleReset = () => {
        setMatchedPortfolioItems(portfolioItems)
    }

    useEffect(() => {
        handleFilter()
    }, [filterQuery])

    return (
        <div style={styles.page}>
            <NewNavbar Portfolio />
            <div style={styles.filter}>
                <p style={{ marginBottom: 5 }}>Filter by technology</p>
                <div>
                    <FilterInput onChange={event => setFilterQuery(event.target.value)}>
                        <option value=''>All</option>
                        {/* sort and return available technologies */}
                        {proficiencies.sort((a,b) => a.technology.toUpperCase() > b.technology.toUpperCase() ? 1 : -1).map(proficiency => proficiency.inProject ? <option key={"option" + proficiency.technology} value={proficiency.technology}>{proficiency.technology}</option> : null)}
                    </FilterInput>
                    {/* <FilterButton onClick={handleFilter}>Go</FilterButton> */}
                    {/* <FilterButton onClick={handleReset}>Undo</FilterButton> */}
                </div>
            </div>
            <div style={isDesktop ? styles.pageBodyDesktop : styles.pageBodyMobile}>
                {
                isDesktop
                    ?
                <>
                    {/* {doneLoading ? <Arrow onClick={() => handleArrowClick('back')}><RiArrowLeftSLine/></Arrow> : <></>} */}
                    <PortfolioItem indexer={{ index, setIndex, length: matchedPortfolioItems.length }} item={matchedPortfolioItems[index]} key={matchedPortfolioItems[index].title} setDoneLoading={setDoneLoading}/>
                    {/* {doneLoading ? <Arrow onClick={() => handleArrowClick('forward')}><RiArrowRightSLine/></Arrow> : <></>} */}
                </>
                    :
                <>
                    {matchedPortfolioItems.map((item, i) => <PortfolioItem mobile key={"mobileitem" + i} item={item} setDoneLoading={setDoneLoading} />)}
                </>
                }
            </div>
            {
                isDesktop && doneLoading
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
        overflow: 'scroll'
    },
    pageBodyDesktop: {
        padding: "10px 10px 0px 10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    pageBodyMobile: {
        background: "linear-gradient(white, lightgrey)",
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
        margin: "50px auto 0 auto",
        width: 300,
    }
}