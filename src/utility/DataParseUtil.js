export const convertQuestionString = (str) => {
	return window.atob(str);
};

const shuffleAnswers = (allAns) => {
	for (let i = 0; i < allAns.length; i++) {
		const randomIndex = Math.floor((Math.random() * 1000) % allAns.length);
		const tempData = allAns[i];
		allAns[i] = allAns[randomIndex];
		allAns[randomIndex] = tempData;
	}

	return allAns;
};

export const mapResponseToQuestionObj = (responseObj) => {
	const correctAnswerStr = convertQuestionString(responseObj.correct_answer);
	const incorrectAns = (responseObj.incorrect_answers || []).map(convertQuestionString);
	const allAnswers = shuffleAnswers([correctAnswerStr, ...incorrectAns]);
	const correctAnswer = allAnswers.findIndex(str => str === correctAnswerStr);
	return {
		question: convertQuestionString(responseObj.question),
		correctAnswer,
		category: convertQuestionString(responseObj.category),
		allAnswers,
	};
};