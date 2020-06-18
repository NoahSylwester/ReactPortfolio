import React, { useState, useEffect } from 'react';
import Theme from '../theme.json';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import splashImage from '../splash.jpg';

const fadeInAnimation = keyframes`${fadeIn}`;

const shadowExpand = keyframes`
    0% {
        box-shadow: 15px 10px 100px rgba(255,251,205,0.6);
        color: lemonchiffon;
    }
    100% {
        box-shadow: 15px 10px 10px 1000px rgba(256,256,256,0.9);
        color: white;
    }
`

const ClickBox = styled.div`
    animation: 3s ${fadeInAnimation};
    letter-spacing: 5px;
    cursor: pointer;
    user-select: none;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    display: ${props => props.hide ? "none" : "flex"};
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    padding: 22px;
    color: ${Theme.color};
    font-size: 2rem;
    text-decoration: none;
    transition: 0.2s;
    z-index: 10;
    background-color: white;
    box-shadow: 1px 2px 5px lightgrey;
    :hover {
        box-shadow: 0px 1px 2px lightgrey;
    }
    :active {
        box-shadow: inset 1px 1px 4px lightgrey;
    }
`

const Reveal = styled.div`
    animation: 3s ${fadeInAnimation};
    color: lemonchiffon;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 2s;
    font-size: 1.5rem;
    background-image: url(${splashImage});
    background-size: cover;
    z-index: 0;
    overflow: hidden;
`

const Billboard = styled.a`
    user-select: none;
    width: 60vw;
    height: 60vw;
    max-height: 80vh;
    max-width: 80vh;
    border-radius: 300px;
    font-size: min(3vw, 4vh);
    background-color: rgba(0,0,0,0.2);
    border: 1px lemonchiffon solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 15px 10px 100px lemonchiffon;
    text-decoration: none;
    transition: 0.2s;
    color: lemonchiffon;
    font-weight: bold;
    z-index: 5;
    :hover {
        background-color: rgba(0,0,0,0.3);
        animation: 4s ${shadowExpand};
        color: white;
        box-shadow: 15px 10px 10px 1000px rgba(256,256,256,0.9);
    }
    :active {
        background-color: rgba(0,0,0,0.5);
        box-shadow: 15px 10px 10px 1000px white;
        border: 3px white solid;
    }
`

export default function Splash(props) {

    return (
        <div style={styles.splash}>
            {
            <>
                <Reveal className="reveal">
                    <Billboard href="/about">
                        <h1>Noah Sylwester</h1>
                        <h1>web developer</h1>
                    </Billboard>
                </Reveal>
            </>
            }
        </div>
    )
}

const styles = {
    splash: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: '-20'
    },
}
