import React from 'react';
import styled from "styled-components";

const Thumbnail = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-image: url(${props => props.item.thumbnail || props.item.image});
    background-size: cover;
    background-position: center;
    border: ${props => props.isCurrentIndex ? "1px solid black" : "1px solid white"};
    box-shadow: ${props => props.isCurrentIndex ? "0px 2px 7px black" : "0px 2px 7px lightgrey"};
    cursor: pointer;
    transition: 0.2s;
    :hover {
        box-shadow: 0px 2px 10px grey;
    }
    :active {
        background-color: rgba(245,245,245,1);
        box-shadow: inset 0px 2px 7px grey;
    }
`

const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    margin: 15px auto;
`

export default function PortfolioItemThumbnails(props) {

    const { items } = props;

    return (
        <ThumbnailContainer>
            {items.map((item, i) => <Thumbnail isCurrentIndex={props.currentIndex === i} key={item.image} item={item} onClick={() => props.changeIndex(i)} />)}
        </ThumbnailContainer>
    )
}
