import React from 'react';
import styled from "styled-components";

const NavLink = styled.a`
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
        background-color: rgba(245,245,245,1);
        box-shadow: inset 0px 2px 2px lightgrey;
    }
    :active {
        background-color: rgba(240,240,240,1);
        box-shadow: inset 0px 2px 4px darkgrey;
    }
`;

const NavBrand = styled.a`
    position: absolute;
    left: 0;
    top: 0;
    text-decoration: none;
    padding: 15px;
    margin: 2px;
    border: 1px black solid;
`;

export default function Navbar(props) {

    const { About, Portfolio } = props;

    return (
        <nav style={styles.navbar}>
            {/* <NavBrand href="/">Noah Sylwester</NavBrand> */}
            <NavLink style={About ? styles.selected : {}} href="/about">About</NavLink>
            <NavLink style={Portfolio ? styles.selected : {}} href="/portfolio">Portfolio</NavLink>
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
    selected: {
        backgroundColor: "rgba(245,245,245,1)",
        boxShadow: "inset 0px 2px 2px lightgrey"
    }
}