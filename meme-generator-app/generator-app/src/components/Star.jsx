/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'


export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-shape.png"
    return (
        <main>
            <img
                src={`./images/${starIcon}`}
                className="card--favorite"
                onClick={props.handleClick}
            />
        </main>



    )











}