import React from 'react';
import Theme from '../theme.json';
import styled from 'styled-components';

const pageImages = [
    {
        url: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
        color: "white"
    },
    {
        url: 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        color: "lemonchiffon"
    },
    {
        url: 'https://images.unsplash.com/photo-1543189263-50760f6a2977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        color: "ghostwhite"
    },
    {
        url: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        color: "white"
    },
    {
        url: 'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        color: "darkgreen"//"rgb(40,52,41)"
    },
    {
        url: 'https://images.unsplash.com/photo-1533792658684-4c83f4825a61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        color: "black"
    },
]

const pageImage = pageImages[Math.floor(Math.random() * pageImages.length)]

const ClickBox = styled.a`
    padding: 12px;
    box-shadow: 1px 3px 5px grey;
    color: ${Theme.color};
    font-size: 1.7rem;
    text-decoration: none;
    transition: 2s;
    z-index: 10;
    background-color: white;
    :hover {
        box-shadow: none !important;
        margin: 3px 1px 0px 1px;
        background-color: rgba(256,256,256,0);
        color: ${pageImage.color}
    }
    :hover + .overlay {
        background-color: rgba(256,256,256,0);
    }
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
            <ClickBox href="/about">
                <h1>Noah Sylwester</h1>
                <h2>// web developer</h2>
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
        backgroundImage: `url(${pageImage.url})`,
        backgroundSize: 'cover',
        zIndex: '-20'
    },
}
