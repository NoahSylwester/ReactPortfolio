import React from 'react';
import styled from "styled-components";

export default function PortfolioItem(props) {

    const { title, description, source, live, image } = props.item;

    const PortfolioItemWrapper = styled.div`
        background-color: white;
        box-shadow: 0px 2px 7px lightgrey;
        width: 80%;
        min-width: 200px;
        height: 400px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url(${image});
        background-size: cover;
    `
    const Banner = styled.div`
        background-color: rgba(256,256,256,0.9);
        border: 1px solid rgba(245,245,245,1);
        border-right: 0;
        border-left: 0;
        width: 100%;
        padding: 20px 0 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    return (
        <PortfolioItemWrapper>
            <Banner>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={source}>Source Code</a>
                <a href={live}>See it live</a>
            </Banner>
        </PortfolioItemWrapper>
    )
}
