import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './routes/welcome/Welcome';
import QuizSingleQuestion from './routes/quizSingleQuestion/QuizSingleQuestion';
import QuizResult from './routes/quizResult/QuizResult';
import {RedirectManager} from './components/redirectToWelcome/RedirectToWelcome.jsx';
import ErrorPage from './components/errorPage/ErrorPage';

export default class Router extends React.Component {
	render() {
		return (
			<div className=''>
				<BrowserRouter>
					<RedirectManager/>
					<Switch>
						<Route path='/result' component={QuizResult}/>
						<Route path='/quiz' component={QuizSingleQuestion}/>
						<Route path='/welcome' component={Welcome}/>
						<Route path='/' exact
						       component={Welcome}/>
						<Route component={ErrorPage}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}