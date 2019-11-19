export const quizQuestionActionTypes = {
	UPDATE_QUESTIONS: 'updateQuizQuestions',
	UPDATE_ANSWER: 'markAnswer',
};

export const resetQuestions = (allQues) => ({
	type: quizQuestionActionTypes.UPDATE_QUESTIONS,
	payload: allQues
});

