import React from 'react';
import Navbar from "../components/Navbar";
import ContactDashboard from '../components/ContactDashboard';
import styled from 'styled-components';
import proficiencies from '../proficiencies.json';
import { useMediaQuery } from 'react-responsive'

export default function About() {

    const isDesktop = useMediaQuery({
        query: '(min-width: 755px)'
      })

    const styles = isDesktop ? stylesDesktop : stylesMobile;

    const Proficiency = styled.span`
      color: ${props => props.color};
    `

    return (
        <div style={styles.page}>
            <Navbar About />
            <div style={styles.pageBody}>
                <img style={styles.img} src="https://noahsylwester.github.io/Portfolio/assets/images/profile_pic%20copy.jpg"></img>
                <ContactDashboard />
                <p style={styles.proficiencies}>
                    <p>Proficient in</p>
                    <strong>
                        {proficiencies.map((item) => {
                            return (
                            <>
                                {item.icon ? <img src={item.icon} style={{height: "1rem", width: "1rem"}}/> : <></>}
                                <Proficiency color={item.color}> {item.technology} · </Proficiency>
                            </>
                            )
                        })}
                    </strong>
                </p>
                <p style={styles.description}>
                    Fullstack web developer with a background in applied physics powering my problem-solving skills. Recently
                    earned a certificate in Full Stack Development from the University of Oregon, with proficiency in JavaScript,
                    HTML5, CSS, and React. Known for being easy to work with, and for my driving work ethic and innovative
                    problem-solving abilities. With each project, my aim is to best engage my audience for an impactful
                    user experience.
                    <br /><br />
                    I recently led a team of four in agile development style to develop a full stack React Native app that
                    provides a social media platform for PNW hikers and explorers. Looking forward to contributing in the future
                    as part of a hard-working, quality-obsessed team to build a better user experience.
                </p>
            </div>
        </div>
    )
}

const stylesDesktop = {
    page: {
        backgroundColor: 'white',
        height: "100%",
    },
    pageBody: {
        padding: "100px 100px 100px 120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        marginLeft: "1px",
        height: "300px",
        width: "300px",
        borderRadius: "200px",
        boxShadow: "0 1px 7px lightgrey"
    },
    proficiencies: {
        width: "70%",
        padding: 20,
        paddingTop: 0,
        textAlign: "center"
    },
    description: {
        width: "80%",
        paddingLeft: 10,
        borderLeft: "1px solid lightgrey"
    },
}
const stylesMobile = {
    page: {
        backgroundColor: 'white',
        height: "100%",
    },
    pageBody: {
        padding: "100px 40px 100px 50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        marginLeft: "8px",
        height: "250px",
        width: "250px",
        borderRadius: "200px",
    },
    proficiencies: {
        width: "70%",
        padding: 20,
        paddingTop: 0,
        textAlign: "center"
    },
    description: {
        width: "100%",
        paddingLeft: 10,
        borderLeft: "1px solid lightgrey"
    },
}