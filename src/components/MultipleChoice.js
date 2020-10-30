import React from 'react';
import ListGroup from "reactstrap/es/ListGroup";
import ListGroupItemHeading from "reactstrap/es/ListGroupItemHeading";
import Options from "./Options";


function MultipleChoice({question,choices, answer,nextQuestion,addScore}){

    return(
        <div>
        <ListGroup>
            <ListGroupItemHeading>{question}</ListGroupItemHeading>
            <Options choices={shuffleOptions(choices)}
                     nextQuestion = {nextQuestion}
                     addScore = {addScore}
                     question={question} answer={answer}/>
        </ListGroup>

        </div>
    );
}


function shuffleOptions(choices){

    var ctr = choices.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = choices[ctr];
        choices[ctr] = choices[index];
        choices[index] = temp;
    }
    return choices;

}

export default MultipleChoice;