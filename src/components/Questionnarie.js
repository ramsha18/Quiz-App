import React, { Component } from 'react'
import dataSet from '../api/dataSet';
import Quizarea from './Quizarea';
import Score from './Score';

class Questionnarie extends Component {
    constructor(){
        super();
        this.state={
            current:0,
            dataSet:dataSet,
            correct:0,
            incorrect:0,
            isFinished:false,
            status:"--"
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(choice)
    {
        if(choice == this.state.dataSet[this.state.current].correct)
        {
            this.setState({
                correct: this.state.correct+1
            })
        }
        else
        {
            this.setState({
                incorrect: this.state.incorrect+1
            })
        }
        if(this.state.current == this.state.dataSet.length-1)
        {
            this.setState({isFinished:true})
            if(this.state.correct == 2 && this.state.current == 2)
            {
                this.setState({
                    status: "Pass"
                })
            }
            else if((this.state.correct == 1 || this.state.correct == 0 )  && this.state.current == 2)
            {
                this.setState({
                    status: "Fail"
                })
            }
        }
        else
        {
            this.setState({current: this.state.current+1})
        }
    }
    render() {
        return (
            <div className="main">
                <Quizarea handleClick={this.handleClick} isFinished={this.state.isFinished} 
                dataSet={this.state.dataSet[this.state.current]} current={this.state.current} 
                status={this.state.status}/>
                <Score correct={this.state.correct} incorrect={this.state.incorrect}/>
            </div>
        )
    }
}

export default Questionnarie
