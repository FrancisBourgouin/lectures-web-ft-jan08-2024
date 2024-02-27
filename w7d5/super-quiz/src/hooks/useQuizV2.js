import { useReducer, useState } from "react";
import useWow from "./useWow";
import { quizReducer } from "../reducers/quizReducer";
// dispatch({ type: "validateAnswer", data: { answer: "something" } });

export default function useQuizV2(initialQuestions) {
  const { sayWow } = useWow();

  const initialState = {
    questions: initialQuestions,
    isEditMode: false,
    gameStats: {
      questionId: "1",
      answered: 0,
      goodAnswers: 0,
    },
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  return {
    state,
    dispatch,
  };
}
