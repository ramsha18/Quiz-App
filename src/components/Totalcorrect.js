import React from 'react'

function Totalcorrect(props) {
    return (
        <div className="score">
            <h2>Correct: {props.correct}</h2>
        </div>
    )
}

export default Totalcorrect
