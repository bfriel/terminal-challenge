import React from 'react';
import QuestionActions from '../actions/question_actions.js';
import QuestionStore from '../stores/question_store.js';

class QuestionItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			studentAnswer: QuestionStore.studentAnswers()[this.props.number - 1]
		};
		this._handleChange = this._handleChange.bind(this);
		this._questionChange = this._questionChange.bind(this);
	}

	componentDidMount() {
		this.questionsListener = QuestionStore.addListener(this._questionChange);
	}

	componentWillUnmount() {
		this.questionsListener.remove();
	}

	_questionChange() {
		this.setState({
			studentAnswer: QuestionStore.studentAnswers()[this.props.number - 1]
		});
	}

	_handleChange(e) {
		QuestionActions.submitStudentAnswer(this.props.number - 1, e.target.value);
	}

	toggleAnswer() {
		let answer;
		if (this.props.view === "editor") {
			answer = <p>A: {this.props.answer}</p>;
		} else if (this.props.view === "student") {
			let userInput;
			if (this.props.answerType === "boolean") {
				userInput = <span>
											<input type="radio"
												name="answer"
												value={true}
												onChange={this._handleChange} />True
											<input type="radio"
												name="answer"
												value={false}
												onChange={this._handleChange} />False
										</span>;
			} else if (this.props.answerType === "string") {
				userInput = <input type="text"
											name="answer"
											value={this.state.studentAnswer}
											onChange={this._handleChange} />;
			}
			answer =  <form>
									<label htmlFor="answer">A: </label>
									{userInput}
							  </form>;
		}
		return answer;
	}

	render() {
		let answer = this.toggleAnswer();
		return (
      <div>
				<h5>Question {this.props.number}</h5>
				<p>Q: {this.props.question}</p>
				{answer}
      </div>
		);
	}
}

export default QuestionItem;
