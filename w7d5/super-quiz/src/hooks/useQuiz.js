import { useState } from "react";
import useWow from "./useWow";

export default function useQuiz(initialQuestions) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [isEditMode, setIsEditMode] = useState(false);
  const [gameStats, setGameStats] = useState({
    questionId: "1",
    answered: 0,
    goodAnswers: 0,
  });
  const { sayWow } = useWow();

  const questionIdList = Object.keys(questions);

  const currentQuestion = questions[gameStats.questionId];

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const validateAnswer = (formData) => {
    const { answer } = formData;
    const updatedGameStats = { ...gameStats };

    if (currentQuestion.answer === answer) {
      updatedGameStats.goodAnswers++;
      sayWow();
    }

    updatedGameStats.answered++;

    const currentIndex = questionIdList.findIndex(
      (id) => id === updatedGameStats.questionId
    );
    const nextIndex = (currentIndex + 1) % questionIdList.length;
    updatedGameStats.questionId = questionIdList[nextIndex];

    setGameStats(updatedGameStats);
  };

  const addNewQuestion = (formData) => {
    const newId = Object.keys(questions).length + 1;

    const newQuestion = { id: newId, ...formData };

    setQuestions({ ...questions, [newId]: newQuestion });
  };

  return {
    currentQuestion,
    isEditMode,
    gameStats,
    actions: { toggleEditMode, validateAnswer, addNewQuestion },
  };
}
