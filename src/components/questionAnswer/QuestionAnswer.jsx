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
		selectedOption: PropTypes.number
	};

	static defaultProps = {
		questionStatement: '',
		answers: [],
		correctAnswer: 0,
		updateSelectedAnswwer: () => {
		},
		questionCount: 0,
		questionCategory: '',
		selectedOption: undefined
	};

    state = {};

    render() {

	    const {questionStatement, answers, questionCount, correctAnswer, questionCategory, selectedOption, updateSelectedAnswwer} = this.props;

    	return (
		    <div className='question-statement-answers-wrapper'>
			    <div className={'question-counter'}>
				    <div className={'question-label'}>{`Q. ${questionCount}`}</div>
				    <div className={'question-category'}>{`Category: ${questionCategory}`}</div>
			    </div>
			    <div className='question-statement'>{questionStatement}</div>
			    <div className='question-answers-wrapper'>
				    {answers.map((str, index) => {
					    const isSelected = selectedOption === index;
					    return (
						    <div
							    key={index}
							    className={`answer-single-option ${isSelected ? ' selected-option' : ''}`}
							    onClick={() => updateSelectedAnswwer(index)}>
							    {str}
						    </div>
					    );
				    })}
			    </div>
		    </div>
    	);

    }
}