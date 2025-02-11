import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from "styled-components";
import proficiencies from '../proficiencies.json';
import SVGLoadingIcon from '../components/SVGLoadingIcon';
import { useMediaQuery } from 'react-responsive';

const PortfolioItemWrapper = styled.div`
    background-color: white;
    box-shadow: inset ${props => props.mobile ? "0px 1px 50px darkgrey" : "0px 1px 10px lightgrey"};
    width: ${props => props.mobile ? "100%" : "80%"};
    min-width: 200px;
    height: 60vh;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.item.loading ? `background: white;` : `animation: fade-in-animation 0.15s ease-out; background-image: url(${props.item.image});` }
    background-size: cover;
    background-position: center 0px;
    ${props => props.isDesktop ? `` : `
        justify-content: flex-end;
        border: 2px grey solid;
    `}
`

const Banner = styled.div`
    background-color: ${props => props.item.bannerRGBA};
    border: 3px solid rgba(235,235,235,1);
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
        color: rgba(0,200,50,1) !important;
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
    ${props => props.isDesktop ? `` : `
        h1 {
            font-size: 1em;
        }
        p, div {
            font-size: 0.75em;
        }
    `}
`

const TechnologyIcon = styled.img`
    height: 1rem;
    object-fit: contain;
`

const TechnologyIconWrapper = styled.div`
    margin: 3px 5px 0 5px;
    position: relative;
    :hover {
        ::after {
            content: "${props => props.name}";
            font-size: 0.75rem;
            position: absolute;
            white-space: nowrap;
            bottom: -10px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
`

export default function PortfolioItem(props) {

    const { title, technologies, description, source, live, image, bannerRGBA, appStore, playStore } = props.item || { title: null, technologies: [], description: null, source: null, live: null, image: null, bannerRGBA: null, appStore: null, playStore: null };
    const { index, setIndex, length } = props.indexer || { index: null, setIndex: null, length: null };

    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState('');

    const isDesktop = useMediaQuery({
        query: '(min-width: 755px)'
      })
    
    //load in background image
    const imageToLoad = new Image();
    imageToLoad.src = image;
    imageToLoad.onload = () => {
        setImageSrc(imageToLoad.src)
        setLoading(false);
        props.setDoneLoading(true);
    }

    const changeIndex = (event) => {
        if (length !== 1) {
            switch (event.key) {
                case "ArrowRight":
                    return setIndex(index + 1 <= length - 1 ? index + 1 : 0);
                case "ArrowLeft":
                    return setIndex(index - 1 >= 0 ? index - 1 : length - 1);
                default:
                    return;
            }
        }
        else {
            setIndex(index)
        }
    }
    
    useEffect(() => {
        document.addEventListener('keyup', changeIndex);
        return () => document.removeEventListener('keyup', changeIndex)
    }, [index, length])

    return (
        <PortfolioItemWrapper key={title} mobile={props.mobile} item={{ image: imageSrc, bannerRGBA, loading }} isDesktop={isDesktop}>
            <Banner item={{ image, bannerRGBA }} isDesktop={isDesktop}>
                <h1 style={{textAlign: "center"}}>{title}</h1>
                <div style={{display: 'flex', flexDirection: 'row'}}>{technologies.sort((a,b) => a.localeCompare(b)).map(technology => {
                    return (
                    <TechnologyIconWrapper name={technology} key={technology + title}>
                        <TechnologyIcon src={proficiencies.filter(proficiency => proficiency.technology === technology)[0].icon} style={{ height: "1.5rem", width: "1.5rem", margin: "3px 5px 0 5px" }}/>
                    </TechnologyIconWrapper>
                    )
                })}</div>
                <p style={{ padding: "0 20px" }}><strong>{description}</strong></p>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    {source && <a target="_blank" href={source}><strong>Source</strong></a>}
                    {live && <a target="_blank" href={live}><strong>See it live</strong></a>}
                    {appStore && <a target="_blank" href={appStore}><strong>iOS</strong></a>}
                    {playStore && <a target="_blank" href={playStore}><strong>Android</strong></a>}
                </div>
            </Banner>
        </PortfolioItemWrapper>
    )
}