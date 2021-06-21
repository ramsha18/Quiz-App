import React from 'react'

function Question(props) {
    
    return (
        <div>
            <h1 className="questheader">Question {props.current+1} of 3</h1>
            <hr></hr>
            <h1 className="quest">{props.dataSet.question}</h1>
        </div>
    )
}

export default Question;
