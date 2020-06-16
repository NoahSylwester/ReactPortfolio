import React from 'react';
import Theme from '../theme.json';
import styled, { keyframes } from 'styled-components';
import { fadeInDownBig } from 'react-animations';

const pageImage = {
    url: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    color: "lemonchiffon"
}

const bounceAnimation = keyframes`${fadeInDownBig}`;
// animation: 3s ${bounceAnimation};


const ClickBox = styled.a`
    animation: 3s ${bounceAnimation};
    width: 100px;
    height: 100px;
    border-radius: 100px;
    display: flex;
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
// :hover {
//     box-shadow: none !important;
//     background-color: rgba(256,256,256,0);
//     color: rgba(0,0,0,0);
// }
    // :hover + .overlay {
    //     background-color: rgba(256,256,256,0);
    // }
    // :hover ~ .reveal {
    //     color: ${pageImage.color};
    // }
// `

const Reveal = styled.div`
    color: ${pageImage.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 2s;
    font-size: 1.5rem;
`

const OverLay = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(256,256,256,1);
    transition: 3s;
    z-index: 5;
`

export default function Splash(props) {

    return (
        <div style={styles.splash}>
            <Reveal className="reveal">
                <h1>Noah Sylwester</h1>
                <h1>web developer</h1>
                <h2>(click to enter)</h2>
            </Reveal>
            <ClickBox href="/about">
                click
            </ClickBox>
            <OverLay className="overlay" />
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
        // backgroundColor: "lightskyblue",
        boxShadow: "inset 0px -200px 1000px rgba(256,256,256,0.6)",
        backgroundImage: `url(${pageImage.url})`,
        backgroundSize: 'cover',
        zIndex: '-20'
    },
}
