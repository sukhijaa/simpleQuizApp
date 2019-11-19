import React from 'react';
import PropTypes from 'prop-types';


export default class QuestionAnswer extends React.Component {
	static propTypes = {
		questionStatement: PropTypes.string,
		answers: PropTypes.array,
		correctAnswer: PropTypes.number,
		updateSelectedAnswwer: PropTypes.func
	};

	static defaultProps = {
		questionStatement: '',
		answers: [],
		correctAnswer: 0,
		updateSelectedAnswwer: () => {
		}
	};

    state = {};

    render() {

	    const {questionStatement, answers} = this.props;

    	return (
		    <div className='question-statement-answers-wrapper'>
			    <div className={'question-statement'}>{questionStatement}</div>
			    <div className={'question-answers-wrapper'}>
				    {answers.map(str => str)}
			    </div>
		    </div>
    	);

    }
}