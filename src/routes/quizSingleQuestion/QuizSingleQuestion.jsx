import React from 'react';
import {QuizAppWrapper} from '../quizAppWrapper/QuizAppWrapper';
import QuestionAnswer from '../../components/QuestionAnswer.jsx';
import {MaterialUIWithStylesHOC} from '../../utility/MaterialUIWithStylesHOC.jsx';
import {questionChangeButtons} from '../../utility/MaterialUIStyles.js';
import Fab from '@material-ui/core/Fab';
import './QuizSingleQuestion.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentQuestion, getQuizQuestions, getUserAnswers} from '../../reducers/StoreSelectors';
import PropTypes from 'prop-types';


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
		userResponses: [],
	};

    state = {};

    render() {

	    const {classes, currentQuestion, allQuestions, userResponses} = this.props;

    	return (
    		<div className='quiz-single-question'>
    			<Link to='/welcome'>
    				<Fab color='secondary' aria-label='add'
    					className={classes.button}>
    					{'<'}
    				</Fab>
    			</Link>
    			<QuestionAnswer/>
    			<Link to='/result'>
    				<Fab color='secondary' aria-label='add'
    					className={classes.button}>
    					{'>'}
    				</Fab>
    			</Link>
    		</div>
    	);

    }
}