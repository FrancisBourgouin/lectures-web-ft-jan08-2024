const validateAnswerAction = (state, action) => {
  const currentQuestion = state.questions[state.gameStats.questionId];
  const questionIdList = Object.keys(state.questions);
  const updatedState = { ...state };
  const updatedGameStats = { ...state.gameStats };

  updatedGameStats.answered++;
  if (currentQuestion.answer === action.data.answer) {
    updatedGameStats.goodAnswers++;
    // state.happyCallback();
  }

  const currentIndex = questionIdList.findIndex(
    (id) => id === updatedGameStats.questionId
  );
  const nextIndex = (currentIndex + 1) % questionIdList.length;
  updatedGameStats.questionId = questionIdList[nextIndex];

  updatedState.gameStats = updatedGameStats;

  return updatedState;
};

const addNewQuestionAction = (state, action) => {
  const newId = Object.keys(state.questions).length + 1;

  const newQuestion = { id: newId, ...action.data };

  const updatedQuestions = { ...state.questions, [newId]: newQuestion };

  const updatedState = { ...state, questions: updatedQuestions };

  return updatedState;
};

const toggleEditAction = (state) => {
  const updatedState = { ...state, isEditMode: !state.isEditMode };

  return updatedState;
};

const errorAction = (state) => {
  return state;
};

export const quizReducer = (state, action) => {
  const actions = {
    validateAnswer: validateAnswerAction,
    addNewQuestion: addNewQuestionAction,
    toggleEdit: toggleEditAction,
  };

  const selectedAction = actions[action.type];

  if (!selectedAction) {
    console.log("Action doesn't exist");
    return errorAction(state);
  }

  const updatedState = selectedAction(state, action);

  return updatedState;
};
