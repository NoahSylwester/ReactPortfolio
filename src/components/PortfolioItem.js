import React from 'react';
import styled from "styled-components";

const PortfolioItemWrapper = styled.div`
    background-color: white;
    box-shadow: 0px 1px 3px lightgrey;
    width: 80%;
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
        color: blue !important;
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

    return (
        <PortfolioItemWrapper item={{ image, bannerRGBA }}>
            <Banner item={{ image, bannerRGBA }}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <a target="_blank" href={source}>Source Code</a>
                    {live ? <a target="_blank" href={live}>See it live</a> : <div />}
                </div>
            </Banner>
        </PortfolioItemWrapper>
    )
}
