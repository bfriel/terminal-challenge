import React from 'react';
import QuestionForm from './question_form';

class EditorView extends React.Component {
  constructor() {
    super();
    this.state = {
      creatingQuestion: false
    };
    this._switchCreator = this._switchCreator.bind(this);
  }

  _switchCreator() {
    this.setState({
      creatingQuestion: !this.state.creatingQuestion
    });
  }

  getQuestionCreator() {
    let creator;
    if (this.state.creatingQuestion === false) {
      creator = <a className="button" onClick={this._switchCreator}>Create a Question</a>;
    } else {
      creator = <QuestionForm />;
    }
    return creator;
  }

	render() {
    let questionCreator = this.getQuestionCreator();
    let quizIndex;
		return (
      <div>
        <h2>I am the editor!</h2>
        {questionCreator}
        {quizIndex}
      </div>
		);
	}
}

export default EditorView;
