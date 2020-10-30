import React,{Component} from "react";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

class Options extends Component{

    constructor(props) {
        super(props);
        this.state={
            answer:'',
            choice:'',
            rightAnswer:false,
            disableButton:false
        }
        this.selectedValue= this.selectedValue.bind(this);
        this.next = this.next.bind(this);
    }

    selectedValue(e){
        console.log(e.target.value);
        this.setState({choice:e.target.value});

    }

    submitResponse(choice){
        if(choice === this.props.answer){
            this.props.addScore(1);
            this.setState({rightAnswer:true,disableButton:true,answer:'You got it right!'});
        } else {
            this.setState({rightAnswer:false,disableButton:true,answer:this.props.answer});
        }

    }


    next(){
        if(this.state.rightAnswer){
            this.props.nextQuestion();
            this.setState({ choice:'', rightAnswer:'', disableButton:false,answer:''});
        } else {
            this.props.nextQuestion();
            this.setState({ choice:'', rightAnswer:'', disableButton:false,answer:''});
        }

    }

    render() {
      const options = this.props.choices!==undefined && this.props.choices.map((option,index)=>{
          return(
             <form key={index}>
                  <input
                      type="radio"
                      checked={this.state.choice===option}
                      name="radioGroup"
                      value={option}
                      onChange={this.selectedValue}
                  />
                  <span><label htmlFor={option}>{option}</label></span>
             </form>

          );
      })



        return(
            <div>
                {options}
                <form>
                <input type="button" value="Confirm" disabled={this.state.disableButton}  onClick={()=>this.submitResponse(this.state.choice)}/>
                {this.state.disableButton?
                    <input type="button" className="submit-button" value="Next" onClick={this.next}/>:<div></div>}
                </form>
                {this.state.disableButton?
                    <div>
                        {this.state.rightAnswer?
                            <div>
                                <span className="space">{this.state.answer}</span></div>:<div>

                                <span className="space">Correct answer: {this.state.answer}</span>
                            </div>}</div>:<div></div>}
            </div>
        );
    }

}
export default Options;