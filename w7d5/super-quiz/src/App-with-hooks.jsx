import CurrentScore from "./components/CurrentScore";
import Header from "./components/Header";
import NewQuestionForm from "./components/NewQuestionForm";
import QuestionForm from "./components/QuestionForm";
import { questions } from "./data/questionData";

import "./App.css";
import useQuiz from "./hooks/useQuiz";

function App() {
  const { currentQuestion, isEditMode, gameStats, actions } = useQuiz(questions);

  return (
    <>
      <Header />
      <main>
        <CurrentScore
          {...gameStats}
          isEditMode={isEditMode}
          toggleEditMode={actions.toggleEditMode}
        />
        {isEditMode ? (
          <NewQuestionForm onSubmit={actions.addNewQuestion} />
        ) : (
          <QuestionForm {...currentQuestion} onSubmit={actions.validateAnswer} />
        )}

        {/* {isEditMode && <NewQuestionForm />}
        {!isEditMode && <QuestionForm />} */}
      </main>
    </>
  );
}

export default App;
