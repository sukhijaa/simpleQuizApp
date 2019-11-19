import React from 'react';
import PropTypes from 'prop-types';
import './QuestionAnswer.scss';
import {CancelRounded, DoneOutlineRounded} from '@material-ui/icons';
import {MaterialUIWithStylesHOC} from '../../utility/MaterialUIWithStylesHOC';
import {answerSubmitIcon} from '../../utility/MaterialUIStyles';

@MaterialUIWithStylesHOC(answerSubmitIcon)
export default class QuestionAnswer extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
		questionStatement: PropTypes.string,
		answers: PropTypes.array,
		correctAnswer: PropTypes.number,
		updateSelectedAnswwer: PropTypes.func,
		questionCount: PropTypes.number,
		questionCategory: PropTypes.string,
		selectedOption: PropTypes.number,
		showResult: PropTypes.bool,
	};

	static defaultProps = {
		classes: {},
		questionStatement: '',
		answers: [],
		correctAnswer: 0,
		updateSelectedAnswwer: () => {
		},
		questionCount: 0,
		questionCategory: '',
		selectedOption: undefined,
		showResult: false,
	};

    state = {};

    render() {

	    const {
		    questionStatement, answers, questionCount, correctAnswer,
		    questionCategory, selectedOption, updateSelectedAnswwer, showResult, classes,
	    } = this.props;

    	return (
		    <div className='question-statement-answers-wrapper'>
			    <div className='question-counter'>
				    <div className='question-label'>{`Q. ${questionCount}`}</div>
				    <div className='question-category'>{`Category: ${questionCategory}`}</div>
			    </div>
			    <div className='question-statement'>{questionStatement}</div>
			    <div className='question-answers-wrapper'>
				    {answers.map((str, index) => {
					    const isSelected = selectedOption === index;
					    const isCorrect = index === correctAnswer;
					    return (
						    <div
							    key={index}
							    className={`answer-single-option ${isSelected ? ' selected-option' : ''}`}
							    onClick={() => updateSelectedAnswwer(index)}>
							    <div className='single-option-label'>{str}</div>
							    <div className='single-option-icon'>
								    {
									    showResult ?
										    isCorrect ?
											    <DoneOutlineRounded className={classes.doneIcon}/>
											    : isSelected ? <CancelRounded className={classes.crossIcon}/> : null
										    : null
								    }
							    </div>
						    </div>
					    );
				    })}
			    </div>
		    </div>
    	);

    }
}