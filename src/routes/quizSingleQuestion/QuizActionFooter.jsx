import React from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function QuizActionFooter(props) {

	const {
		currentQuestion, allQuestions, classes, moveToPreviousQuestion,
		handleQuizRestart, handleQuizSubmit, moveToNextQuestion
	} = props;

	const isFirstQuestion = currentQuestion === 0;
	const isLastQuestion = currentQuestion === allQuestions.length - 1;

	return (
		<React.Fragment>
			<div className='navigation-button back-navigation'>
				{
					isFirstQuestion ? null :
						<Fab
							color='secondary' aria-label='add'
							className={classes.button}
							onClick={moveToPreviousQuestion}>
							{'<'}
						</Fab>
				}
			</div>
			<div className='quiz-question-submit-quiz'>
				<Button
					variant='contained'
					color='secondary'
					onClick={handleQuizRestart}
					className={classes.restartButton}>
					Restart
				</Button>
				<Button
					variant='contained'
					color='secondary'
					onClick={handleQuizSubmit}
					className={classes.submitButton}>
					Submit
				</Button>
			</div>
			<div className='navigation-button forward-navigation'>
				{
					isLastQuestion ? null :
						<Fab color='secondary' aria-label='add'
						     className={classes.button}
						     onClick={moveToNextQuestion}>
							{'>'}
						</Fab>
				}
			</div>
		</React.Fragment>
	);
}

QuizActionFooter.propTypes = {
	classes: PropTypes.object,
	currentQuestion: PropTypes.number,
	allQuestions: PropTypes.array,
	moveToPreviousQuestion: PropTypes.func,
	moveToNextQuestion: PropTypes.func,
	handleQuizSubmit: PropTypes.func,
	handleQuizRestart: PropTypes.func,
};