import {userDetailsActionTypes} from '../actions/UserDetails.actions';

const defaultState = {
	name: 'Guest',
};

export const UserDetailsReducer = (state = defaultState, action = {}) => {
	switch (action.type) {
		case userDetailsActionTypes.UPDATE_NAME: {
			return {...state, name: action.payload};
		}
		default: return {...state};

	}
};