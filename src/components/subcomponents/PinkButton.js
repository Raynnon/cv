import React from 'react'

export default function PinkButton(props) {
    const pinkRoundedButton = "btn btn-pink font-weight-bold mr-3 ";
    const background = props.background ? "btn-danger shadow" : "btn-outline-warning"
    const buttonClass = pinkRoundedButton + background;
 
    return (
            <button type="button" className={buttonClass}>{props.text}</button>
    )
}


