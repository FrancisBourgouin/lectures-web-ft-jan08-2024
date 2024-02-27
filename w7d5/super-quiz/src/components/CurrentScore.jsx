export default function CurrentScore(props) {
  const { toggleEditMode, isEditMode, answered, goodAnswers } = props;

  const text = isEditMode ? "Quiz mode" : "Edit mode";
  return (
    <section className="CurrentScore">
      {!!answered && (
        <h1>Current Score: {Math.round((goodAnswers / answered) * 100)}%</h1>
      )}
      <button onClick={toggleEditMode}>{text}</button>
    </section>
  );
}
