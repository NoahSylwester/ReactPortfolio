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
        background-color: rgba(0,0,0,0.2);
    }
    100% {
        box-shadow: 15px 10px 10px 1000px rgba(256,256,256,0.9);
        color: white;
        background-color: rgba(0,0,0,0.4);
    }
`

const Reveal = styled.div`
    animation: 2s ${fadeInAnimation};
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
        animation: 4s ${shadowExpand};
        color: white;
        box-shadow: 15px 10px 10px 1000px rgba(256,256,256,0.9);
        background-color: rgba(0,0,0,0.4);
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
