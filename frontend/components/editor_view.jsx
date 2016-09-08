import React from 'react';
import QuestionForm from './question_form';
import QuestionItem from './question_item';
import QuestionActions from '../actions/question_actions.js';

class EditorView extends React.Component {
  constructor(props) {
    super();
  }

  getQuestionCreator() {
    let creator;
    if (this.props.creating === false) {
      creator = <a className="button" onClick={QuestionActions.toggleCreate}>Create a Question</a>;
    } else {
      creator = <QuestionForm />;
    }
    return creator;
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

	render() {
    let questionCreator = this.getQuestionCreator();
    let quizIndex = this.getQuizIndex();
		return (
      <div>
        <h2>Edit Quiz</h2>
        {questionCreator}
        {quizIndex}
      </div>
		);
	}
}

export default EditorView;
