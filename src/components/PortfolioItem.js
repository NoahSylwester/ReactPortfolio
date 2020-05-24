import React from 'react';

export default function Portfolio(props) {

    const { title, description, source, live } = props.item;

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <br />
            <a href={source}>Source Code</a>
            <br />
            <a href={live}>See it live</a>
        </div>
    )
}