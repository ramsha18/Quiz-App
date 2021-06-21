import React from 'react'

function  Totalincorrect(props) {
    return (
        <div className="score">
            <h2>InCorrect: {props.incorrect}</h2>
        </div>
    )
}

export default Totalincorrect
