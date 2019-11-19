import {quizQuestionActionTypes} from '../actions/QuizQuestions.actions';
import {uiPropertiesActionTypes} from "../actions/UIProperties.actions";

const defaultProps = {
	quizQuestions: [],
	userAnswers: {},
};

export const QuizQuestionsReducer = (state = defaultProps, action = {}) => {
	switch (action.type) {
		case quizQuestionActionTypes.UPDATE_QUESTIONS: {
			return {...state, quizQuestions: action.payload};
		}
		case quizQuestionActionTypes.UPDATE_ANSWER: {
			const answers = {...state.userAnswers};
			answers[action.payload.questionIndex] = action.payload.markedAnswer;
			return {...state, userAnswers: answers};
		}
		case uiPropertiesActionTypes.RESET_THE_GAME: {
			return {...defaultProps};
		}
		default: return state;
	}
};

