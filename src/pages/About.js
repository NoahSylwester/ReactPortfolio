import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import ContactDashboard from '../components/ContactDashboard';
import styled from 'styled-components';
import proficiencies from '../proficiencies.json';
import bio from '../bio.json';
import SVGLoadingIcon from '../components/SVGLoadingIcon'
import { useMediaQuery } from 'react-responsive';

export default function About(props) {

    const isDesktop = useMediaQuery({
        query: '(min-width: 755px)'
      })
    const isSmallScreen = !useMediaQuery({
        query: '(min-width: 430px)'
      })

    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState('');
    
    //load in background image
    const imageToLoad = new Image();
    imageToLoad.src = "https://noahsylwester.github.io/Portfolio/assets/images/profile_pic%20copy.jpg";
    imageToLoad.onload = () => {
        setImageSrc(imageToLoad.src)
        // setTimeout(() => {
        setLoading(false);
        // }, 3000)
    }

    const styles = isDesktop ? stylesDesktop : stylesMobile;

    const Proficiency = styled.span`
      color: ${props => props.color};
    `

    return (
        <div style={styles.page}>
            <Navbar About />
            <div style={styles.pageBody}>
                <div style={styles.imgContainer}>
                    {loading ? <SVGLoadingIcon about/> : <img style={styles.img} src={imageSrc}></img>}
                </div>
                <ContactDashboard />
                <div style={styles.proficiencies}>
                    <p style={{ marginBottom: 10 }}>Proficient in</p>
                    <strong>
                        {
                        isDesktop
                        ?
                        // desktop view
                        proficiencies.map((item, i) => {

                            return (
                            item.proficient
                            ?
                            <React.Fragment key={item.icon + i}>
                                {item.icon ? <img src={item.icon} style={{height: "1rem", width: "1rem"}}/> : <></>}
                                <Proficiency color={item.color}>&nbsp;{item.technology}{i !== proficiencies.length - 1 ? <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span> : ""}</Proficiency>
                            </React.Fragment>
                            :
                            <React.Fragment key={item.icon + i}></React.Fragment>
                            )
                        })
                        :
                        // mobile view
                        <div style={styles.proficienciesGrid}>
                            {proficiencies.map((item, i) => {
                                return (
                                item.proficient
                                ?
                                <div key={item.icon + i} style={{ paddingLeft: isSmallScreen ? "0" : "20%", whiteSpace: "nowrap" }}>
                                    {item.icon ? <img src={item.icon} style={{height: "1rem", width: "1rem"}}/> : <></>}
                                    <Proficiency color={item.color}>&nbsp;{item.technology}</Proficiency>
                                </div>
                                :
                                <React.Fragment key={item.icon + i}></React.Fragment>
                                )
                            })}
                        </div>
                        }

                    </strong>
                </div>
                <p style={styles.description}>
                    {bio.paragraphs.map((item,i) => {
                        return (
                        <React.Fragment key={"bio" + i}>
                            {item}
                            {i !== bio.paragraphs.length -1 ? <React.Fragment key={"bioinner" + i}><br /><br /></React.Fragment> : <React.Fragment key={"bioinnerer" + i}></React.Fragment>}
                        </React.Fragment>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}

// desktop styles
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
    imgContainer: {
        height: "300px",
        width: "300px",
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
// mobile styles
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
    imgContainer: {
        height: "300px",
        width: "300px",
    },
    proficiencies: {
        width: "80%",
        padding: 20,
        paddingTop: 0,
        textAlign: "center"
    },
    proficienciesGrid: { 
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridAutoRows: "30px",
        justifyItems: "left"
    },
    description: {
        width: "100%",
        paddingLeft: 10,
        borderLeft: "1px solid lightgrey"
    },
}