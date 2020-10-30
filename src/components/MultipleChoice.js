import React from 'react';
import ListGroup from "reactstrap/es/ListGroup";
import ListGroupItemHeading from "reactstrap/es/ListGroupItemHeading";
import Options from "./Options";
import ListGroupItemText from "reactstrap/es/ListGroupItemText";


function MultipleChoice({question, choices, answer, nextQuestion, addScore}) {

    return (
        <div>
            <ListGroup>
                <ListGroupItemHeading>{question}</ListGroupItemHeading>
                <ListGroupItemText>
                    <Options choices={shuffleOptions(choices)}
                             nextQuestion={nextQuestion}
                             addScore={addScore}
                             question={question} answer={answer}/>
                </ListGroupItemText>
            </ListGroup>

        </div>
    );
}

/*
To shuffle options
 */
function shuffleOptions(choices) {

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