import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const NavbarStyled = styled.nav`
    padding: 10px;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.isNotSmallScreen ? "space-around" : "center"};
    align-items: center;
    pointer-events: none;
`

const NavLink = styled.div`
    text-decoration: none;
    color: black;
    transition: 0.2s;
    padding: 10px;
    border-radius: 50px;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
    :hover {
        background-color: rgba(250,250,250,1);
        box-shadow: inset 0px 1px 2px lightgrey;
    }
    :active {
        background-color: rgba(240,240,240,1);
        box-shadow: inset 0px 1px 4px darkgrey;
    }
`;

const NavBrand = styled.a`
    background-color: rgba(256,256,256,0.4);
    color: black;
    display: flex;
    transition: 0.2s;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    position: absolute;
    left: 0;
    top: 0;
    text-decoration: none;
    padding: 15px;
    margin: 10px;
    box-shadow: 0px 1px 2px lightgrey; 
    width: 30px;
    height: 30px;
    border-radius: 50px;
    pointer-events: auto;
    :hover {
        background-color: rgba(245,245,245,1);
        box-shadow: inset 0px 1px 1px lightgrey;
    }
    :active {
        background-color: rgba(240,240,240,1);
        box-shadow: inset 0px 1px 3px darkgrey;
    }
`;

export default function Navbar(props) {

    const { About, Portfolio } = props;

    const isNotSmallScreen = useMediaQuery({
        query: '(min-width: 500px)'
    })

    const styles = isNotSmallScreen ? stylesDesktop : stylesMobile;

    return (
        <NavbarStyled isNotSmallScreen={isNotSmallScreen}>
            <NavBrand href="/">
                <div>Noah</div>
                <div>Sylwester</div>
            </NavBrand>
            <Link style={{ ...styles.navlink, ...(About ? styles.selected : styles.unselected)}} to="/about">
                <NavLink isNotSmallScreen={isNotSmallScreen} style={styles.link}>About</NavLink>
            </Link>
            <Link style={{ ...styles.navlink, ...(Portfolio ? styles.selected : styles.unselected)}} to="/portfolio">
                <NavLink isNotSmallScreen={isNotSmallScreen} style={styles.link}>Portfolio</NavLink>
            </Link>
        </NavbarStyled>
    )
}

const stylesDesktop = {
    link: {
        textDecoration: "none",
        color: "black",
    },
    navlink: {
        textDecoration: 'none',
        borderRadius: "50px",
    },
    selected: {
        backgroundColor: "rgba(245,245,245,1)",
        boxShadow: "inset 0px 1px 2px lightgrey"
    },
    unselected: {
        backgroundColor: "rgba(256,256,256,0.4)",
        boxShadow: "0px 1px 2px lightgrey"
    }
}

const stylesMobile = {
    link: {
        textDecoration: "none",
        color: "black",
    },
    navlink: {
        textDecoration: 'none',
        borderRadius: "50px",
        margin: "0px 5%",
    },
    selected: {
        backgroundColor: "rgba(245,245,245,1)",
        boxShadow: "inset 0px 1px 2px lightgrey"
    },
    unselected: {
        backgroundColor: "rgba(256,256,256,0.4)",
        boxShadow: "0px 1px 2px lightgrey"
    }
}