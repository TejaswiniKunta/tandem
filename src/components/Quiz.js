import React,{Component} from "react";
import MultipleChoice from "./MultipleChoice";
import {Modal,ModalBody,Button} from "reactstrap";

 class Quiz extends Component{
    constructor(props) {
        super(props)
        this.state={
          quiz:props.quiz,
            currentQuestion:0,
            total:0,
            isModalOpen:false,
            message:''
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.endTest = this.endTest.bind(this);
        this.addScore = this.addScore.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

     nextQuestion(){

        if(this.state.currentQuestion+1<this.state.quiz.length){
            this.setState(prevState => {
                return {currentQuestion:prevState.currentQuestion+1}});
        } else{
            this.endTest();
        }
     }

     toggleModal(){
         this.setState({isModalOpen:!this.state.isModalOpen});
         if(this.state.total<12){
             this.setState({message:'Please try again'});
         } else if(this.state.total >= 12 && this.state.total<=15){
             this.setState({message:'Can do better'});
         } else{
             this.setState({message:'Good job!!!'});
         }
     }

     endTest(){
          window.location.reload(false);
     }

     addScore(score){
         this.setState(prevState => {
             return {total: prevState.total + score}});
     }

    render() {
        const questions = this.state.quiz.map((q,index)=>{
            return(
                <div key={index}>
                    {this.state.currentQuestion===index?
                        <div className="questions current-display">{q.question}</div>:
                        <div className="questions">{q.question}</div>
                    }
                </div>
            )})
        return (
            <div className="row">
                <div className="col-sm-5">
                {questions}
            </div>
                <div className="col-sm-4">
                    <div className="current-question">
                        <div><span>Question {this.state.currentQuestion + 1}/</span>{this.state.quiz.length}
                    <MultipleChoice question={this.state.quiz[this.state.currentQuestion].question}
                                    answer={this.state.quiz[this.state.currentQuestion].correct}
                                    nextQuestion = {this.nextQuestion}
                                    addScore={this.addScore}
                                    choices={this.state.quiz[this.state.currentQuestion].incorrect}/>
                        </div>
                    </div>
                    <div className="container">
                        <Button color="danger"
                                className="end-test"
                                onClick={(e) =>
                                    window.confirm("Are you sure you wish to end the quiz?") &&
                                    this.toggleModal(e)}>End Quiz</Button>
                    </div>
                    <Modal isOpen={this.state.isModalOpen}
                           toggle={this.toggleModal}
                           className="modal-dialog-centered"
                           scrollable={false} >
                        <ModalBody className="popup-contentCenter">
                            <h2>Your Score:{this.state.total}</h2>
                            <h6>{this.state.message}</h6>
                            <Button onClick={this.endTest}>Close</Button>
                        </ModalBody>
                    </Modal>
                </div>
            </div>

        );
    }

}

export default (Quiz);
