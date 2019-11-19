import React from 'react';
import {QuizAppWrapper} from '../quizAppWrapper/QuizAppWrapper';
import QuestionAnswer from '../../components/QuestionAnswer.jsx';
import {MaterialUIWithStylesHOC} from '../../utility/MaterialUIWithStylesHOC.jsx';
import {questionChangeButtons} from '../../utility/MaterialUIStyles.js';
import Fab from '@material-ui/core/Fab';
import './QuizSingleQuestion.scss';
import {Link} from 'react-router-dom';


@QuizAppWrapper
@MaterialUIWithStylesHOC(questionChangeButtons)
export default class QuizSingleQuestion extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {

    	const {classes} = this.props;

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