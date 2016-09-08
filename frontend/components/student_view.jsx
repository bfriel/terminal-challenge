import React from 'react';
import QuestionItem from './question_item';
import FinalScore from './final_score';

class StudentView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      submitted: false,
      currentIndex: 0
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(value) {
    if (value === "next") {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    } else if (value === "previous") {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    } else if (value === "submit") {
      this.setState({
        submitted: true,
        currentIndex: 0
      });
    }
  }

  getQuizIndex() {
    let count = 0;
    let quizIndex = this.props.questions.map( (question) => {
        count += 1;
        return (
          <QuestionItem key={count}
            number={count}
            question={question.question}
            answerType={question.answerType}
            answer={question.answer}
            view={this.props.route.path}/>
        );
      });
    return quizIndex;
  }

  getCurrentQuestion(quizIndex) {
    let currentQuestion;
    if (this.props.questions.length === 0) {
      currentQuestion = <div>
                          You have not made any questions yet! <br />
                          Click on the 'Editor View' link above to get started.
                        </div>;
    } else if (this.state.submitted === true) {
      currentQuestion = <FinalScore score={this.props.score} />;
    } else {
      currentQuestion = quizIndex[this.state.currentIndex];
    }
    return currentQuestion;
  }

  getButtons() {
    let currentIndex = this.state.currentIndex;
    let questionsLength = this.props.questions.length;
    let buttons;
    if (questionsLength === 0 || this.state.submitted === true) {
      return;
    } else if (currentIndex === 0 && questionsLength > 1) {
      buttons = <a className="button"
                  onClick={() => this._handleClick("next")}>Next</a>;
    } else if (currentIndex > 0 && currentIndex < questionsLength - 1) {
      buttons = <div>
                  <a className="button"
                    onClick={() => this._handleClick("previous")}>Previous</a>
                  <a className="button"
                    onClick={() => this._handleClick("next")}>Next</a>
                </div>;
    } else if (currentIndex === 0 && questionsLength === 1) {
      buttons = <a className="button" onClick={() => this._handleClick("submit")}>Submit</a>;
    } else {
      buttons = <div>
                  <a className="button"
                    onClick={() => this._handleClick("previous")}>Previous</a>
                  <a className="button"
                    onClick={() => this._handleClick("submit")}>Submit Quiz</a>
                </div>;
    }
    return buttons;
  }

	render() {
    let quizIndex = this.getQuizIndex();
    let currentQuestion = this.getCurrentQuestion(quizIndex);
    let buttons = this.getButtons();
		return (
      <div>
  			<h2>I am the student view!</h2>
        {currentQuestion}
        {buttons}
      </div>
		);
	}
}

export default StudentView;
