import React from 'react';
import PropTypes from 'prop-types';
import './QuestionAnswer.scss';


export default class QuestionAnswer extends React.Component {
	static propTypes = {
		questionStatement: PropTypes.string,
		answers: PropTypes.array,
		correctAnswer: PropTypes.number,
		updateSelectedAnswwer: PropTypes.func,
		questionCount: PropTypes.number,
		questionCategory: PropTypes.string,
	};

	static defaultProps = {
		questionStatement: '',
		answers: [],
		correctAnswer: 0,
		updateSelectedAnswwer: () => {
		},
		questionCount: 0,
		questionCategory: ''
	};

    state = {};

    render() {

	    const {questionStatement, answers, questionCount, correctAnswer, questionCategory} = this.props;

    	return (
		    <div className='question-statement-answers-wrapper'>
			    <div className={'question-counter'}>
				    <div className={'question-label'}>{`Q. ${questionCount}`}</div>
				    <div className={'question-category'}>{`Category: ${questionCategory}`}</div>
			    </div>
			    <div className='question-statement'>{questionStatement}</div>
			    <div className='question-answers-wrapper'>
				    {answers.map(str => {
					    return (
						    <div className={'answer-single-option'}>{str}</div>
					    );
				    })}
			    </div>
		    </div>
    	);

    }
}