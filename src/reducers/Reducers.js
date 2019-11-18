import {combineReducers} from 'redux';
import {QuizQuestionsReducer} from './QuizQuestions.reducer.js';
import {UIPropsReducer} from './UIProperties.reducer.js';
import {UserDetailsReducer} from './UserDetails.reducer.js';

const combinedReducers = {
    questions: QuizQuestionsReducer,
    uiProperties: UIPropsReducer,
    userDetails: UserDetailsReducer
};

export default combineReducers(combinedReducers);