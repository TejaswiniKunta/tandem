import React from 'react';
import Options from "./Options";
import ListGroup from "reactstrap/es/ListGroup";
import ListGroupItemText from "reactstrap/es/ListGroupItemText";
import ListGroupItemHeading from "reactstrap/es/ListGroupItemHeading";


function MultipleChoice({question,choices, answer,nextQuestion,addScore}){

    return(
        <div>
        <ListGroup>
            <ListGroupItemHeading><h5>{question}</h5></ListGroupItemHeading>
            <ListGroupItemText><Options choices={shuffleOptions(choices)}
                                        nextQuestion = {nextQuestion}
                                        addScore = {addScore}
                                        question={question} answer={answer}/></ListGroupItemText>
        </ListGroup>

        </div>
    );
}





function shuffleOptions(choices){

    var ctr = choices.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        temp = choices[ctr];
        choices[ctr] = choices[index];
        choices[index] = temp;
    }
    return choices;

}

export default MultipleChoice;