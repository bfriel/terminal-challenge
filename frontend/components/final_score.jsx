import React from 'react';
import QuestionStore from '../stores/question_store.js';

class FinalScore extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h5>Final Score</h5>
        <p>Correct Answers: {this.props.score.numRight}</p>
        <p>Incorrect Answers: {this.props.score.numWrong}</p>
      </div>
    );
  }

}

export default FinalScore;
