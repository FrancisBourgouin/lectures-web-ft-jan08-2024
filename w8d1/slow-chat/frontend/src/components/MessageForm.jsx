import useForm from "../hooks/useForm";

export default function MessageForm(props) {
  const { onSubmit } = props;

  const initialValues = { content: "", type: "message" };
  // const report = (formData) => console.log("formdata", formData);

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <form className="MessageForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your message"
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <select name="type" onChange={handleChange} value={formData.type}>
        <option value="message">Message</option>
        <option value="announcement">Announcement</option>
      </select>
      <button>Send</button>
    </form>
  );
}
