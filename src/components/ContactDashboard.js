import React from 'react';
import styled from "styled-components";
import contactItems from '../contact-items.json';
import { useMediaQuery } from 'react-responsive';

const Dashboard = styled.div`
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const ContactIconWrapper = styled.a`
    margin: 10px;
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    box-shadow: 0 0 3px lightgrey;
    border-radius: 50px;
    transition: 0.2s;
    :hover {
        box-shadow: inset 0 0 1px lightgrey;
        background-color: rgba(250,250,250,1);
    }
    :active {
        box-shadow: inset 0 0 5px lightgrey;
        background-color: rgba(245,245,245,1)
    }
`

const ContactIcon = styled.img`
    height: 30px;
    width: 30px;
    object-fit: cover;
    object-position: 0 0;
`

const ContactLabel = styled.a`
    font-size: 0.8rem;
    text-decoration: none;
    color: black;
    transition: 0.2s;
    :hover {
        color: red !important;
    }
    :visited {
        color: black;
    }
`

export default function ContactDashboard(props) {

    const isDesktop = useMediaQuery({
        query: '(min-width: 755px)'
      })

    return (
        <Dashboard>
            {contactItems.map((item, i) => {
                return (
                    <div style={{textAlign:"center"}}>
                    {
                    isDesktop
                    ?
                        <ContactLabel href={item.link}>{item.name}</ContactLabel>
                    :
                        <></>
                    }
                    <ContactIconWrapper key={i} target="_blank" href={item.link} name={item.name}>
                        <ContactIcon src={item.iconPath} />
                    </ContactIconWrapper>
                    </div>
                    )
                })}
        </Dashboard>
    )
}


