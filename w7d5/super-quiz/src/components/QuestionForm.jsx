import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { prompt, onSubmit } = props;

  const initialValues = { answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <section className="QuestionForm">
      <form onSubmit={handleSubmit}>
        <p>{prompt}</p>
        <input
          type="text"
          name="answer"
          placeholder="Enter the answer"
          value={formData.answer}
          onChange={handleChange}
        />
        <button>Answer!</button>
      </form>
    </section>
  );
}
