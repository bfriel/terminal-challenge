import React from 'react';
import QuestionActions from '../actions/question_actions.js';

class QuestionForm extends React.Component {
  constructor(props){
    super();
    this.state = {
      question: "",
      answerType: "",
      answer: ""
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    if (e.target.type === "radio" && val === "true") {
      val = true;
    } else if (e.target.type === "radio" && val === "false") {
      val = false;
    }
    let obj = {};
    obj[key] = val;
    this.setState(obj);
    if (key === "answerType") {
      this.setState({
        answer: ""
      });
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (this.state.question === "") {
      alert("Question cannot be blank");
      return;
    } else if (this.state.answerType === "") {
      alert("Please specify the answer type");
      return;
    } else if (this.state.answer === "") {
      alert("Answer cannot be blank");
      return;
    }
    QuestionActions.createQuestion(
      this.state,
      this.setState({
        question: "",
        answerType: "",
        answer: null
      })
    );
  }

  getAnswer() {
    let answer;
    if (this.state.answerType === "boolean") {
      answer = <div>
                  <label htmlFor="answer">Answer: </label>
                  <input type="radio"
                    name="answer"
                    value={true}
                    onChange={this._handleChange} />True
                  <input type="radio"
                    name="answer"
                    value={false}
                    onChange={this._handleChange} />False
               </div>;
    } else if (this.state.answerType === "string") {
      answer = <div>
                 <label htmlFor="answer">Answer: </label>
                 <input type="text"
                   name="answer"
                   value={this.state.answer}
                   placeholder="4..."
                   onChange={this._handleChange} />
               </div>;
    }
    return answer;
  }

  render() {
    let answer = this.getAnswer();
    return (
      <form onSubmit={this._handleSubmit}>
        <label htmlFor="question">Question: </label>
        <input type="text"
          name="question"
          placeholder="what is 2 + 2?..."
          onChange={this._handleChange}/> <br />
        <label htmlFor="answerType">Answer Type: </label>
        <input type="radio"
          name="answerType"
          value="boolean"
          onChange={this._handleChange}/>True/False
        <input type="radio"
          name="answerType"
          value="string"
          onChange={this._handleChange}/>Text <br />
        {answer} <br />
      <input type="submit" className="button submit" value="Create Question" />
      </form>
    );
  }
}

export default QuestionForm;
