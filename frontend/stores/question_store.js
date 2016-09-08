import AppDispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';

let _questions = [];
let _creating = false;
let _studentAnswers = [];

const QuestionStore = new Store(AppDispatcher);

QuestionStore.questions = function () {
  return _questions.slice();
}

QuestionStore.creating = function () {
  return _creating;
}

QuestionStore.studentAnswers = function () {
  return _studentAnswers.slice();
}

QuestionStore.calculateScore = function () {
  let score = { numRight: 0, numWrong: 0 }
  for (var i = 0; i < _questions.length; i++) {
     if (_questions[i].answer === _studentAnswers[i]) {
       score.numRight += 1;
     } else {
       score.numWrong += 1;
     }
  }
  return score;
}

QuestionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "CREATE_QUESTION":
      _questions.push({
        question: payload.question,
        answerType: payload.answerType,
        answer: payload.answer
      })
      _creating = false;
      break;
    case "TOGGLE_CREATE":
      _creating = !_creating;
      break;
    case "SUBMIT_ANSWER":
      _studentAnswers[payload.qIndex] = payload.answer;
      break;
  }
  QuestionStore.__emitChange();
}

export default QuestionStore;
