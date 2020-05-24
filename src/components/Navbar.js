import React from 'react';
import styled from "styled-components";

const NavLink = styled.a`
    text-decoration: none;
    color: red;
    transition: 0.2s;
    padding: 10px;
    :hover {
        background-color: blue;
    }
`;

const NavBrand = styled.a`
    position: absolute;
    left: 0;
    text-decoration: none;
    padding: 20px;
`;

export default function Navbar(props) {

    return (
        <nav style={styles.navbar}>
            <NavBrand href="/">Noah Sylwester</NavBrand>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
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
    }
}