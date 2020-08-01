import React from 'react'
import styled, { keyframes } from 'styled-components'

const loadingAnimation = (spinRadius) => keyframes`
    from {
        transform: rotate(0deg) translateX(${spinRadius}px) rotate(0deg);
    }
    to {
        transform: rotate(360deg) translateX(${spinRadius}px) rotate(-360deg);
    }
`
// const loadingPulseAnimation = () => keyframes`
//     0% {
//         r: 20;
//         opacity: 1;
//         stroke-width: 10;
//     }
//     100% {
//         fill: white;
//         stroke-width: 10;
//         r: 70;
//         opacity: 0;
//     }
// `


const LoadingSVGWrapper = styled.svg`
    width: 30vw;
    height: 30vw;
    max-width: 90vh;
    max-height: 90vh;
    border-radius: 3000px;
`

const LoadingCircle = styled.circle`
    animation: ${props => props.animationDuration} ${props => loadingAnimation(props.spinRadius)} linear infinite;
    fill: ${props => props.fill};
`

// const LoadingPulse = styled.circle`
//     animation: ${props => props.animationDuration} ${loadingPulseAnimation} ease-out infinite;
//     fill: ${props => props.fill};
// `

export default function SVGLoadingIcon(props) {

    return (
        <LoadingSVGWrapper>
            <LoadingCircle
                cx="50%"
                cy="50%"
                r="20"
                fill="rgba(38,74,24,0.8)"
                animationDuration={`${props.duration || 0.7}s`}
                spinRadius="30"
            ></LoadingCircle>
            <LoadingCircle
                cx="50%"
                cy="50%"
                r="20"
                fill="rgba(105,172,45,0.8)"
                animationDuration={`${props.duration || 0.7}s`}
                spinRadius="-30"
            ></LoadingCircle>

            {/* <LoadingPulse
                cx="50%"
                cy="50%"
                r="20"
                fill="rgba(0,0,0,0)"
                stroke="rgba(38,150,46,0.8)"
                animationDuration="0.6s"
            ></LoadingPulse> */}
            {/* <LoadingPulse
                cx="50%"
                cy="50%"
                r="20"
                fill="white"
                animationDuration="0.7s"
            ></LoadingPulse> */}

            {/* <LoadingCircle
                cx="50%"
                cy="50%"
                r="10"
                fill="rgba(149,200,81,0.8)"
                animationDuration="0.7s"
                spinRadius="45"
            ></LoadingCircle> */}
            {/* <LoadingCircle
                cx="50%"
                cy="50%"
                r="10"
                fill="rgba(197,252,68,0.8)"
                animationDuration="0.7s"
                spinRadius="-30"
            ></LoadingCircle> */}
            {/* <LoadingCircle
                cx="50%"
                cy="50%"
                r="15"
                fill="rgba(38,75,46,0.8)"
                animationDuration="1.2s"
                spinRadius="60"
            ></LoadingCircle>
            <LoadingCircle
                cx="50%"
                cy="50%"
                r="5"
                fill="rgba(6,9,11,0.8)"
                animationDuration="0.8s"
                spinRadius="35"
            ></LoadingCircle>
            <LoadingCircle
                cx="50%"
                cy="50%"
                r="7"
                fill="rgba(226,217,214,0.8)"
                animationDuration="1.3s"
                spinRadius="-65"
            ></LoadingCircle> */}
        </LoadingSVGWrapper>
    )
}