import React from 'react';

function Answer(props) {
    return (
        <div>
            <button className="opt" type="button" onClick={()=> props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}

export default Answer
