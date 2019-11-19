import React from 'react';
import {QuizAppWrapper} from '../quizAppWrapper/QuizAppWrapper';
import QuestionAnswer from '../../components/questionAnswer/QuestionAnswer.jsx';
import {MaterialUIWithStylesHOC} from '../../utility/MaterialUIWithStylesHOC.jsx';
import {questionChangeButtons} from '../../utility/MaterialUIStyles.js';
import Fab from '@material-ui/core/Fab';
import './QuizSingleQuestion.scss';
import {connect} from 'react-redux';
import {getCurrentQuestion, getQuizQuestions, getUserAnswers} from '../../reducers/StoreSelectors';
import PropTypes from 'prop-types';
import {endTheGame, updateCurrentQuestion} from '../../actions/UIProperties.actions';
import Button from '@material-ui/core/Button';
import {updateAnswer} from '../../actions/QuizQuestions.actions';


@QuizAppWrapper
@MaterialUIWithStylesHOC(questionChangeButtons)
@connect(store => ({
	currentQuestion: getCurrentQuestion(store),
	allQuestions: getQuizQuestions(store),
	userResponses: getUserAnswers(store),
}))
export default class QuizSingleQuestion extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
		currentQuestion: PropTypes.number,
		allQuestions: PropTypes.array,
		userResponses: PropTypes.array,
	};

	static defaultProps = {
		classes: {},
		currentQuestion: 0,
		allQuestions: [],
		userResponses: {},
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
		const {currentQuestion} = this.props;
		this.props.dispatch(updateAnswer(currentQuestion, selectedIndex));
	};

	handleQuizSubmit = () => {
		this.props.dispatch(endTheGame());
		this.props.history.push('/result');
		this.props.history.goForward();
	};

	render() {

	    const {classes, currentQuestion, allQuestions, userResponses} = this.props;

	    const isFirstQuestion = currentQuestion === 0;
	    const isLastQuestion = currentQuestion === allQuestions.length - 1;

	    const questionObj = allQuestions[currentQuestion] || {};

    	return (
    		<div className='quiz-single-question'>
			    <QuestionAnswer
				    questionStatement={questionObj.question}
				    correctAnswer={questionObj.correctAnswer}
				    answers={questionObj.allAnswers}
				    questionCategory={questionObj.category}
				    updateSelectedAnswwer={this.updateUserResponse}
				    selectedOption={userResponses[currentQuestion]}
				    questionCount={currentQuestion + 1}/>
			    <div className='quiz-controls-footer'>
				    <div className='navigation-button back-navigation'>
					    {
						    isFirstQuestion ? null :
							    <Fab
								    color='secondary' aria-label='add'
								    className={classes.button}
								    onClick={this.moveToPreviousQuestion}>
								    {'<'}
							    </Fab>
					    }
				    </div>
				    <div className='quiz-question-submit-quiz'>
					    <Button
						    variant='contained'
						    color='secondary'
						    onClick={this.handleQuizSubmit}
						    className={classes.submitButton}>
						    Submit
					    </Button>
				    </div>
				    <div className='navigation-button forward-navigation'>
					    {
						    isLastQuestion ? null :
							    <Fab color='secondary' aria-label='add'
							         className={classes.button}
							         onClick={this.moveToNextQuestion}>
								    {'>'}
							    </Fab>
					    }
				    </div>
			    </div>
    		</div>

	    );

	}
}