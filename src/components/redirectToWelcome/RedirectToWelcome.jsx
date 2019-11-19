import React from 'react';
import {store} from '../../store';
import {getGameStartStatus} from '../../reducers/StoreSelectors';
import {Redirect, withRouter} from 'react-router-dom';


export const RedirectManager = withRouter(({history}) => {
	const currentPath = ((history.location || {}).pathname || '');

	const isQuestionPage = currentPath === '/quiz';
	const isResultPage = currentPath === '/result';
	const hasGameStarted = getGameStartStatus(store.getState());

	if (!hasGameStarted && (isQuestionPage || isResultPage)) {
		return (
			<Redirect to={'/'}/>
		);
	}

	return null;
});