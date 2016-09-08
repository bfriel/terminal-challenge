import React from 'react';

class QuestionForm extends React.Component {
  constructor(props){
    super();
    this.state = {
      question: "",
      answerType: "",
      answer: null
    };
    // this._changeQuestion = this._changeQuestion.bind(this);
    // this._changeType = this._changeType.bind(this);
    // this._changeAnswer = this._changeAnswer.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e){
    let key = e.target.name;
    let val = e.target.value;
    let obj = {};
    obj[key] = val;
    this.setState(obj);
    if (key === "answerType") {
      this.setState({
        answer: null
      });
    }
  }

  // _changeQuestion(e) {
  //   this.setState({
  //     question: e.target.value
  //   });
  // }
  //
  // _changeType(type) {
  //   this.setState({
  //     answerType: type,
  //     answer: null
  //   });
  // }
  //
  // _changeAnswer(e) {
  //    debugger;
  //    this.setState({
  //     answer: e.target.value
  //   });
  // }

  getAnswer() {
    let answer;
    if (this.state.answerType === "boolean") {
      answer = <div>
                  <label htmlFor="answer">Answer: </label>
                  <input type="radio"
                    name="answer"
                    value={true}
                    // onChange={this._changeAnswer}
                    onChange={this._handleChange} />True
                  <input type="radio"
                    name="answer"
                    value={false}
                    // onChange={this._changeAnswer}
                    onChange={this._handleChange} />False
               </div>;
    } else if (this.state.answerType === "text") {
      answer = <div>
                 <label htmlFor="answer">Answer: </label>
                 <input type="text"
                   name="answer"
                   placeholder="4..."
                  //  onChange={this._changeAnswer}
                   onChange={this._handleChange}/>
               </div>;
    }
    return answer;
  }

  render() {
    let answer = this.getAnswer();
    console.log(this.state);
    return (
      <form>
        <label htmlFor="question">Question: </label>
        <input type="text"
          name="question"
          placeholder="what is 2 + 2?..."
          // onChange={this._changeQuestion}
          onChange={this._handleChange}/> <br />
        <label htmlFor="answerType">Answer Type: </label>
        <input type="radio"
          name="answerType"
          // onChange={() => this._changeType("boolean")}
          value="boolean"
          onChange={this._handleChange}/>True/False
        <input type="radio"
          name="answerType"
          // onChange={() => this._changeType("text")}
          value="text"
          onChange={this._handleChange}/>Text <br />
        {answer} <br />
        <input type="submit" value="Create Question" />
      </form>
    );
  }
}

export default QuestionForm;
