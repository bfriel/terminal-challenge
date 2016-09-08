import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Editor from './components/editor';
import StudentView from './components/student_view';

class QuizApp extends React.Component {
	constructor() {
		super();
	}

	_handleClick(view) {
		hashHistory.push(view);
	}

	render() {
		return (
			<div>
				<h1>Quiz App</h1>
				<a className="view-link" onClick={() => this._handleClick("editor")}>Editor View</a>
				<a className="view-link" onClick={() => this._handleClick("student-view")}>Student View</a>
				{this.props.children}
			</div>
		);
	}
}


document.addEventListener("DOMContentLoaded", function() {
	const root = document.querySelector("#root");
	ReactDOM.render(
		<Router history={hashHistory}>
	    <Route path="/" component={QuizApp}>
	      <IndexRoute component={Editor} />
					<Route path="editor" component={Editor} />
					<Route path="student-view" component={StudentView} />
	    </Route>
	  </Router>,
		root
	);
});
