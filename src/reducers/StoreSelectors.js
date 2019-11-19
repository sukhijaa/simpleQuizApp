export const getUserDetails = store => store.userDetails || {};
export const getNameOfUser = store => getUserDetails(store).name;


export const getUIProps = store => store.uiProperties || {};
export const getGameStartStatus = store => getUIProps(store).gameStarted;
export const getCurrentQuestion = store => getUIProps(store).currentQuestion;
export const getGameSubmissionStatus = store => getUIProps(store).gameSubmitted;

export const getQuestionsData = store => store.questions || {};
export const getQuizQuestions = store => getQuestionsData(store).quizQuestions;
export const getUserAnswers = store => getQuestionsData(store).userAnswers;