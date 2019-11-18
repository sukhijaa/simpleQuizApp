import {quizQuestionActionTypes} from "../actions/QuizQuestions.actions";

const defaultProps = {
    quizQuestions: [],
    userAnswers: []
};

export default (state = defaultProps, action = {}) => {
    switch(action.type) {
        case quizQuestionActionTypes.UPDATE_QUESTIONS: {
            return {...state, quizQuestions: action.payload}
        }
        case quizQuestionActionTypes.UPDATE_ANSWER: {
            const answers = [...state.userAnswers];
            if (answers[action.payload.questionIndex] !== undefined) {
                answers[action.payload.questionIndex] = action.payload.markedAnswer;
            }
            return {...state, userAnswers: answers}
        }
        default: return state;
    }
}
