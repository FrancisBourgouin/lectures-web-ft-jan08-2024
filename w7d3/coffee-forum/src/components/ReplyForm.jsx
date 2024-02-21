import { useState } from "react";

export default function ReplyForm(props) {
  const { onSubmit } = props;

  const initialValues = { comment: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
    setFormData(initialValues);
  };

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your comment"
        value={formData.comment}
        name="comment"
        onChange={handleChange}
      />
      <button>Add comment</button>
    </form>
  );
}
