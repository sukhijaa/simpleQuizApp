import {mapResponseToQuestionObj} from '../utility/DataParseUtil';

export const quizQuestionActionTypes = {
	UPDATE_QUESTIONS: 'updateQuizQuestions',
	UPDATE_ANSWER: 'markAnswer',
};

export const resetQuestions = (allQues) => {
	allQues = allQues.map(mapResponseToQuestionObj);

	return {
		type: quizQuestionActionTypes.UPDATE_QUESTIONS,
		payload: allQues,
	};
};

