import React from 'react';
import PropTypes from 'prop-types';


export default class QuestionAnswer extends React.Component {
	static propTypes = {
		questionStatement: PropTypes.string,
		answers: PropTypes.array,
		correctAnswer: PropTypes.number,
		updateSelectedAnswwer: PropTypes.func,
		questionCount: PropTypes.number,
	};

	static defaultProps = {
		questionStatement: '',
		answers: [],
		correctAnswer: 0,
		updateSelectedAnswwer: () => {
		},
		questionCount: 0,
	};

    state = {};

    render() {

	    const {questionStatement, answers, questionCount, correctAnswer} = this.props;

    	return (
		    <div className='question-statement-answers-wrapper'>
			    <div className={'question-counter'}>{questionCount}</div>
			    <div className='question-statement'>{questionStatement}</div>
			    <div className='question-answers-wrapper'>
				    {answers.map(str => {
					    return (
						    <div>{str}</div>
					    );
				    })}
				    {'Correct Answer : ' + correctAnswer}
			    </div>
		    </div>
    	);

    }
}