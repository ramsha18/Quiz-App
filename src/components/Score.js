import React from 'react';
import Totalcorrect from './Totalcorrect';
import Totalincorrect from './Totalincorrect';

function Score(props) {
    return (
        <div className="scoremain">
            <Totalcorrect correct={props.correct}/>
            <Totalincorrect incorrect={props.incorrect}/>
        </div>
    )
}

export default Score
