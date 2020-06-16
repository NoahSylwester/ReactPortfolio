import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

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

    return (
        <nav style={styles.navbar}>
            <NavBrand href="/">
                <div>Noah</div>
                <div>Sylwester</div>
            </NavBrand>
            <Link style={About ? styles.selected : styles.unselected} to="/about">
                <NavLink style={styles.link}>About</NavLink>
            </Link>
            <Link style={Portfolio ? styles.selected : styles.unselected} to="/portfolio">
                <NavLink style={styles.link}>Portfolio</NavLink>
            </Link>
        </nav>
    )
}

const styles = {
    navbar: {
        padding: 10,
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    link: {
        textDecoration: "none",
        color: "black",
    },
    selected: {
        textDecoration: 'none',
        borderRadius: "50px",
        backgroundColor: "rgba(245,245,245,1)",
        boxShadow: "inset 0px 1px 2px lightgrey"
    },
    unselected: {
        textDecoration: 'none',
        borderRadius: "50px",
        backgroundColor: "rgba(256,256,256,0.4)",
        boxShadow: "0px 1px 2px lightgrey"
    }
}