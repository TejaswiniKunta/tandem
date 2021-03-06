import React, {Component} from "react";
import Quiz from "./Quiz";
import {quiz} from '../shared/Apprentice_TandemFor400_Data.json'
import Countdown from "react-countdown";


class Main extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            quiz: this.addAllOptions(quiz)
        }
        this.timeUp = this.timeUp.bind(this);
    }

    /*
    To combine correct and incorrect options
     */
    addAllOptions(quiz) {
        var newQuiz = []
        quiz.forEach(q => {
            const options = q.incorrect;
            if (options.indexOf(q.correct) < 0) {
                options.push(q.correct);
            }
            q.incorrect = options;
            newQuiz.push(q);
        })
        return newQuiz;
    }
    /*
    To toggle Modal dialog box in Child component 'Quiz' when the count down timer is up
     */
    timeUp() {
        this.child.current.showScore();
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-10"></div>
                    <div className="col-sm-2">
                        <Countdown className="count-down"
                                   date={Date.now() + 18 * 100000}
                                   onComplete={this.timeUp}/></div>
                </div>
                <Quiz quiz={this.state.quiz}
                      ref={this.child}/>
            </div>
        );
    }
}

export default Main;
