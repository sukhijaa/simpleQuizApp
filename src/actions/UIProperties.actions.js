export const uiPropertiesActionTypes = {
	START_THE_GAME: 'startGame',
	UPDATE_CURRENT_QUESTION: 'currentQuestion',
	END_THE_GAME: 'endTheGame',
	RESET_THE_GAME: 'resetGame'
};

export const startTheGame = () => ({
	type: uiPropertiesActionTypes.START_THE_GAME,
});

export const endTheGame = () => ({
	type: uiPropertiesActionTypes.END_THE_GAME,
});

export const updateCurrentQuestion = (newQuestionIndex) => ({
	type: uiPropertiesActionTypes.UPDATE_CURRENT_QUESTION,
	payload: newQuestionIndex,
});

export const resetTheGame = () => ({
	type: uiPropertiesActionTypes.RESET_THE_GAME
});


