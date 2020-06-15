import React, { useEffect } from 'react';
import styled from "styled-components";

const PortfolioItemWrapper = styled.div`
    background-color: white;
    box-shadow: 0px 1px 3px lightgrey;
    width: ${(props) => props.mobile ? "100%" : "80%"};
    min-width: 200px;
    height: 400px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.item.image});
    background-size: cover;
    background-position: center;
`

const Banner = styled.div`
    background-color: ${props => props.item.bannerRGBA};
    border: 1px solid rgba(245,245,245,1);
    border-right: 0;
    border-left: 0;
    width: 100%;
    padding: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin: 10px;
    }
    a {
        color: red !important;
        text-decoration: none;
        margin: 2px;
        padding: 5px;
        width: 100px;
        text-align: center;
        :hover {
            padding: 6px 5px 4px 5px;
            background-color: rgba(245,245,245,0.6);
            box-shadow: inset 1px 2px 7px lightgrey;
        }
    }
`

export default function PortfolioItem(props) {

    const { title, description, source, live, image, bannerRGBA } = props.item;
    const { index, setIndex, length } = props.indexer;

    const changeIndex = (event) => {
        switch (event.key) {
            case "ArrowRight":
                return setIndex(index + 1 <= length - 1 ? index + 1 : 0);
            case "ArrowLeft":
                return setIndex(index - 1 >= 0 ? index - 1 : length - 1);
            default:
                return;
        }
    }
    
    useEffect(() => {
        document.addEventListener('keyup', changeIndex);
        return () => document.removeEventListener('keyup', changeIndex)
    }, [index])

    return (
        <PortfolioItemWrapper mobile={props.mobile} item={{ image, bannerRGBA }}>
            <Banner item={{ image, bannerRGBA }}>
                <h1 style={{textAlign: "center"}}>{title}</h1>
                <p style={{ padding: "0 20px" }}>{description}</p>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <a target="_blank" href={source}>Source</a>
                    {live ? <a target="_blank" href={live}>See it live</a> : <div />}
                </div>
            </Banner>
        </PortfolioItemWrapper>
    )
}
