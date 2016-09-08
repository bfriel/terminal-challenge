import AppDispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';

let _questions = [];

const QuestionStore = new Store(AppDispatcher);

QuestionStore.questions = function() {
  return _questions.slice();
}

QuestionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "CREATE_QUESTION":
      _questions.push({
        question: payload.question,
        answerType: payload.answerType,
        answer: payload.answer
      })
      QuestionStore.__emitChange();
      break;
  }
}

export default QuestionStore;
