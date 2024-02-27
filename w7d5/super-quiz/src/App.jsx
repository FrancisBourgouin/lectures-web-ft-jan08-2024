import CurrentScore from "./components/CurrentScore";
import Header from "./components/Header";
import NewQuestionForm from "./components/NewQuestionForm";
import QuestionForm from "./components/QuestionForm";
import { questions } from "./data/questionData";

import "./App.css";
import useQuiz from "./hooks/useQuiz";
import useQuizV2 from "./hooks/useQuizV2";

function App() {
  // const { currentQuestion, isEditMode, gameStats, actions } = useQuiz(questions);
  const { state, dispatch } = useQuizV2(questions);

  const currentQuestion = state.questions[state.gameStats.questionId];

  const newQuestionSubmit = (formData) =>
    dispatch({ type: "addNewQuestion", data: formData });

  const questionSubmit = (formData) =>
    dispatch({ type: "validateAnswer", data: formData });

  return (
    <>
      <Header />
      <main>
        <CurrentScore
          {...state.gameStats}
          isEditMode={state.isEditMode}
          toggleEditMode={() => dispatch({ type: "toggleEdit" })}
        />
        {state.isEditMode ? (
          <NewQuestionForm onSubmit={newQuestionSubmit} />
        ) : (
          <QuestionForm {...currentQuestion} onSubmit={questionSubmit} />
        )}

        {/* {isEditMode && <NewQuestionForm />}
        {!isEditMode && <QuestionForm />} */}
      </main>
    </>
  );
}

export default App;
