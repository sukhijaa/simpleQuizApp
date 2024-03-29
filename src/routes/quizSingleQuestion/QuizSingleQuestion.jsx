import React from 'react';
import {QuizAppWrapper} from '../quizAppWrapper/QuizAppWrapper';
import QuestionAnswer from '../../components/questionAnswer/QuestionAnswer.jsx';
import {MaterialUIWithStylesHOC} from '../../utility/MaterialUIWithStylesHOC.jsx';
import {questionChangeButtons} from '../../utility/MaterialUIStyles.js';
import './QuizSingleQuestion.scss';
import {connect} from 'react-redux';
import {
	getCurrentQuestion,
	getGameSubmissionStatus,
	getQuizQuestions,
	getUserAnswers,
} from '../../reducers/StoreSelectors';
import PropTypes from 'prop-types';
import {endTheGame, resetTheGame, updateCurrentQuestion} from '../../actions/UIProperties.actions';
import {updateAnswer} from '../../actions/QuizQuestions.actions';
import QuizActionFooter from './QuizActionFooter';
import Slider from '@material-ui/core/Slider';


@QuizAppWrapper
@MaterialUIWithStylesHOC(questionChangeButtons)
@connect(store => ({
	currentQuestion: getCurrentQuestion(store),
	allQuestions: getQuizQuestions(store),
	userResponses: getUserAnswers(store),
	quizSubmitted: getGameSubmissionStatus(store),
}))
export default class QuizSingleQuestion extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
		currentQuestion: PropTypes.number,
		allQuestions: PropTypes.array,
		userResponses: PropTypes.object,
		quizSubmitted: PropTypes.bool,
	};

	static defaultProps = {
		classes: {},
		currentQuestion: 0,
		allQuestions: [],
		userResponses: {},
		quizSubmitted: false,
	};

    state = {};

	moveToPreviousQuestion = () => {
		const {currentQuestion} = this.props;
		this.props.dispatch(updateCurrentQuestion(currentQuestion - 1));
	};

	moveToNextQuestion = () => {
		const {currentQuestion} = this.props;
		this.props.dispatch(updateCurrentQuestion(currentQuestion + 1));
	};

	updateUserResponse = (selectedIndex) => {
		const {currentQuestion, quizSubmitted} = this.props;
		if (quizSubmitted) {
			return;
		}
		this.props.dispatch(updateAnswer(currentQuestion, selectedIndex));
	};

	handleQuizSubmit = () => {
		this.props.dispatch(endTheGame());
		this.props.history.push('/result');
		this.props.history.goForward();
	};

	handleQuizRestart = () => {
		this.props.dispatch(resetTheGame());
		this.props.history.push('/');
		this.props.history.goForward();
	};

	getValueText = (val) => `Attemped Questions: ${val}`;

	render() {

		const {classes, currentQuestion, allQuestions, userResponses, quizSubmitted} = this.props;
	    const questionObj = allQuestions[currentQuestion] || {};

		const selectedAnswers = Object.keys(userResponses).length;

    	return (
    		<div className='quiz-single-question'>
			    <QuestionAnswer
				    questionStatement={questionObj.question}
				    correctAnswer={questionObj.correctAnswer}
				    answers={questionObj.allAnswers}
				    questionCategory={questionObj.category}
				    updateSelectedAnswwer={this.updateUserResponse}
				    selectedOption={userResponses[currentQuestion]}
				    showResult={quizSubmitted}
				    questionCount={currentQuestion + 1}/>
			    <div className='quiz-controls-footer'>
				    <QuizActionFooter
					    currentQuestion={currentQuestion}
					    allQuestions={allQuestions}
					    classes={classes}
					    canSubmit={!quizSubmitted}
					    handleQuizRestart={this.handleQuizRestart}
					    handleQuizSubmit={this.handleQuizSubmit}
					    moveToNextQuestion={this.moveToNextQuestion}
					    moveToPreviousQuestion={this.moveToPreviousQuestion}/>
			    </div>
			    <div className='attempted-questions-count'>
				    <Slider
					    value={selectedAnswers}
					    max={10}
					    aria-labelledby='discrete-slider-always'
					    getAriaValueText={this.getValueText}
					    marks={[{value: 0, label: '0'}, {value: 10, label: '10'}]}
					    valueLabelDisplay='auto'/>
				    <span>Attempted Questions Count</span>
			    </div>
    		</div>

	    );

	}
}