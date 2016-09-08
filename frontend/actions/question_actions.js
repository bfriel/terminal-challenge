import AppDispatcher from '../dispatcher/dispatcher.js';

const QuestionActions = {
  createQuestion(attributes) {
    AppDispatcher.dispatch({
      actionType: "CREATE_QUESTION",
      question: attributes.question,
      answerType: attributes.answerType,
      answer: attributes.answer
    });
  },

  toggleCreate() {
    AppDispatcher.dispatch({
      actionType: "TOGGLE_CREATE"
    })
  },

  submitStudentAnswer(qIndex, answer) {
    AppDispatcher.dispatch({
      actionType: "SUBMIT_ANSWER",
      qIndex: qIndex,
      answer: answer,
    });
  }
};

export default QuestionActions;
