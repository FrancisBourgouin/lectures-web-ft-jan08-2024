import useForm from "../hooks/useForm";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;
  const initialValues = { prompt: "", answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <section className="NewQuestionForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="prompt"
          placeholder="Enter the prompt"
          value={formData.prompt}
          onChange={handleChange}
        />
        <input
          type="text"
          name="answer"
          placeholder="Enter the answer"
          value={formData.answer}
          onChange={handleChange}
        />
        <button>Add!</button>
      </form>
    </section>
  );
}
