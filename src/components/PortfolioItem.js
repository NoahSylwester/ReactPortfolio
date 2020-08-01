import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import proficiencies from '../proficiencies.json';
import SVGLoadingIcon from '../components/SVGLoadingIcon'
// import { fadeIn } from 'react-animations';

// const fadeInAnimation = keyframes`${fadeIn}`;

const PortfolioItemWrapper = styled.div`
    background-color: white;
    box-shadow: inset 0px 1px 5px lightgrey;
    width: ${props => props.mobile ? "100%" : "80%"};
    min-width: 200px;
    height: 400px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.item.image});
    background-size: cover;
    background-position: center 0px;
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
            font-size: 0.5rem;
            position: absolute;
            white-space: nowrap;
            bottom: -10px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
`

export default function PortfolioItem(props) {

    const { title, technologies, description, source, live, image, bannerRGBA } = props.item || { title: null, technologies: [], description: null, source: null, live: null, image: null, bannerRGBA: null };
    const { index, setIndex, length } = props.indexer || { index: null, setIndex: null, length: null };

    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState('');
    
    //load in background image
    const imageToLoad = new Image();
    imageToLoad.src = image;
    imageToLoad.onload = () => {
        setImageSrc(imageToLoad.src)
        setLoading(false);
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
        loading
        ?
        <SVGLoadingIcon duration={0.4}/>
        :
        <PortfolioItemWrapper key={title} mobile={props.mobile} item={{ image: imageSrc, bannerRGBA }}>
            <Banner item={{ image, bannerRGBA }}>
                <h1 style={{textAlign: "center"}}>{title}</h1>
                <div style={{display: 'flex', flexDirection: 'row'}}>{technologies.map(technology => {
                    return (
                    <TechnologyIconWrapper name={technology} key={technology + title}>
                        <TechnologyIcon src={proficiencies.filter(proficiency => proficiency.technology === technology)[0].icon} style={{ height: "1rem", width: "1rem", margin: "3px 5px 0 5px" }}/>
                    </TechnologyIconWrapper>
                    )
                })}</div>
                <p style={{ padding: "0 20px" }}><strong>{description}</strong></p>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <a target="_blank" href={source}><strong>Source</strong></a>
                    {live ? <a target="_blank" href={live}><strong>See it live</strong></a> : <div />}
                </div>
            </Banner>
        </PortfolioItemWrapper>
    )
}
