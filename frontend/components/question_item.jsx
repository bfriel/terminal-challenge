import React from 'react';

class QuestionItem extends React.Component {
	constructor(props) {
		super();
	}

	_handleChange() {

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
