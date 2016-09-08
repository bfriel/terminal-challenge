import AppDispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';

let _questions = [];
let _creating = false;

const QuestionStore = new Store(AppDispatcher);

QuestionStore.questions = function () {
  return _questions.slice();
}

QuestionStore.creating = function () {
  return _creating;
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
  }
  QuestionStore.__emitChange();
}

export default QuestionStore;
