import {uiPropertiesActionTypes} from '../actions/UIProperties.actions';

const defaultState = {
	gameStarted: false,
	currentQuestion: 0,
	gameSubmitted: false,
};

export const UIPropsReducer = (state = defaultState, action = {}) => {
	switch (action.type) {
		case uiPropertiesActionTypes.START_THE_GAME: {
			return {...defaultState, gameStarted: true};
		}
		case uiPropertiesActionTypes.UPDATE_CURRENT_QUESTION: {
			return {...state, currentQuestion: action.payload};
		}
		case uiPropertiesActionTypes.END_THE_GAME: {
			return {...state, gameSubmitted: true};
		}
		default: return {...state};

	}
};