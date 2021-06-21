import React from 'react';
import Question from './Question';
import Answerlist from './Answerlist';
import Usergreeting from './Usergreeting';


function Quizarea(props) {
    if(props.isFinished)
    {
        return<Usergreeting status={props.status} current={props.current} correct = {props.correct}/>
    }
    return (
        <div className="padd">
            <Question dataSet={props.dataSet} current={props.current}/>
            <Answerlist handleClick={props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
}
 
export default Quizarea;
