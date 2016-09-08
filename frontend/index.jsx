import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import EditorView from './components/editor_view';
import StudentView from './components/student_view';
import QuestionStore from './stores/question_store.js';

class QuizApp extends React.Component {
	constructor() {
		super();
		this.state = {
			questions: [],
			creating: false
		};
		this._questionChange = this._questionChange.bind(this);
	}

	componentDidMount() {
		this.questionsListener = QuestionStore.addListener(this._questionChange);
	}

	componentWillUnmount() {
		this.questionListener.remove();
	}

	_questionChange() {
		this.setState({
			questions: QuestionStore.questions(),
			creating: QuestionStore.creating()
		});
	}

	_handleClick(view) {
		hashHistory.push(view);
	}

	render() {
		return (
			<div>
				<h1>Quiz App</h1>
				<a className="view-link" onClick={() => this._handleClick("editor")}>Editor View</a>
				<a className="view-link" onClick={() => this._handleClick("student")}>Student View</a>
				{React.cloneElement(
					this.props.children,
					{
						questions: this.state.questions,
						creating: this.state.creating
					}
				)}
			</div>
		);
	}
}

document.addEventListener("DOMContentLoaded", function() {
	const root = document.querySelector("#root");
	ReactDOM.render(
		<Router history={hashHistory}>
	    <Route path="/" component={QuizApp}>
	      <IndexRoute component={EditorView} />
					<Route path="editor" component={EditorView} />
					<Route path="student" component={StudentView} />
	    </Route>
	  </Router>,
		root
	);
});
