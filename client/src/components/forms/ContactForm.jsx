import { useState } from "react";
import api from "../../services/api";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback("");
    setLoading(true);

    try {
      const res = await api.post("http://localhost:3001/api/contact", form);

      setFeedback(res.data.message);

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (err) {
      console.error(err);

      if (err.response?.data?.errors) {
        setFeedback(err.response.data.errors[0].msg);
      } else {
        setFeedback("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        rows="5"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>

      {feedback && (
        <p
          style={{
            color:
              feedback.toLowerCase().includes("required") ||
              feedback.toLowerCase().includes("valid")
                ? "red"
                : "green"
          }}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

export default ContactForm;