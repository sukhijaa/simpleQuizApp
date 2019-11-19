import React from 'react';
import PropTypes from 'prop-types';
import {QuizAppWrapper} from '../quizAppWrapper/QuizAppWrapper';
import {connect} from 'react-redux';
import {getNameOfUser, getQuizQuestions, getUserAnswers} from '../../reducers/StoreSelectors';
import './QuizResult.scss';
import {MaterialUIWithStylesHOC} from '../../utility/MaterialUIWithStylesHOC';
import {questionChangeButtons} from '../../utility/MaterialUIStyles';
import Button from "@material-ui/core/Button";
import {resetTheGame} from "../../actions/UIProperties.actions";


@QuizAppWrapper
@MaterialUIWithStylesHOC(questionChangeButtons)
@connect(store => ({
	userName: getNameOfUser(store),
	userAnswers: getUserAnswers(store),
	allQuestions: getQuizQuestions(store),
}))
export default class QuizResult extends React.Component {
	static propTypes = {
		classes: PropTypes.oject,
		userName: PropTypes.string,
		userAnswers: PropTypes.object,
		allQuestions: PropTypes.array,
	};

	static defaultProps = {
		classes: {},
		userName: '',
		userAnswers: {},
		allQuestions: [],
	};

    state = {};

	checkCountOfCorrectAnswers = () => {
		const {allQuestions, userAnswers} = this.props;
		let correctAnswersCount = 0;
		allQuestions.forEach((ques, index) => {
			if (ques.correctAnswer === userAnswers[index]) {
				correctAnswersCount++;
			}
		});

		return correctAnswersCount;
	}

	handleQuizRestart = () => {
		this.props.dispatch(resetTheGame());
		this.props.history.push('/');
		this.props.history.goForward();
	};

	handleQuizCheckAnswers = () => {
		this.props.history.push('/quiz');
		this.props.history.goForward();
	};

    render() {
	    const {userName, allQuestions, classes} = this.props;


    	return (
		    <div className='quiz-result-page-wrapper'>
			    <div className='quiz-result-congrats-message'>
				    Congrats {userName}
			    </div>
			    <div className='quiz-score-label'>
				    Your Final Score :
			    </div>
			    <div className='quiz-score'>
				    {`${this.checkCountOfCorrectAnswers()} / ${allQuestions.length}`}
			    </div>
			    <div className='quiz-result-controls-footer'>
				    <Button
					    variant='contained'
					    color='secondary'
					    onClick={this.handleQuizCheckAnswers}
					    className={classes.restartButton}>
					    Check Answers
				    </Button>
				    <Button
					    variant='contained'
					    color='secondary'
					    onClick={this.handleQuizRestart}
					    className={classes.submitButton}>
					    Restart
				    </Button>
			    </div>
    		</div>
    	);

    }
}