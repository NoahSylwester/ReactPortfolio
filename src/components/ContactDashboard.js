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
    position: relative;
    margin: 10px;
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    box-shadow: 0 0 3px lightgrey;
    border-radius: 50px;
    transition: 0.2s;
    :hover {
        box-shadow: inset 0 0 1px lightgrey;
        background-color: rgba(250,250,250,1);
        ::after {
            content: "${props => props.hover}";
            color: black;
            font-size: 0.75rem;
            position: absolute;
            white-space: nowrap;
            bottom: -10px;
            left: 50%;
            transform: translate(-50%, 0);
        }
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

const ContactLabel = styled.p`
    font-size: 0.8rem;
    text-decoration: none;
    color: black;
    transition: 0.2s;
    cursor: default;
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
            <div style={isDesktop ? styles.flexColumn : styles.flexRow}>
                {contactItems.map((item, i) => {
                return (
                    <div key={i + "contactdash"} style={{textAlign:"center", display: 'flex', alignItems: 'center'}}>
                        <ContactIconWrapper key={i + "contactwrapper"} target="_blank" href={item.link} name={item.name} hover={item.name}>
                            <ContactIcon src={item.iconPath} />
                        </ContactIconWrapper>
                    </div>
                    )
                })}
            </div>
        </Dashboard>
    )
}

const styles = {
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    }
}
