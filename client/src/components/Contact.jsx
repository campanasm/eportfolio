import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.id]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name || !form.email || !form.message) {

      setFeedback("Please fill out all fields.");
      return;

    }

    if (!emailRegex.test(form.email)) {

      setFeedback("Please enter a valid email.");
      return;

    }

    setFeedback(
      `Thank you, ${form.name}! Your message has been sent.`
    );

    setForm({
      name: "",
      email: "",
      message: ""
    });

  };

  return (
    <main>

      <section>

        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>

          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message:</label>

          <textarea
            id="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Send
          </button>

          <p style={{ color: "red" }}>
            {feedback}
          </p>

        </form>

      </section>

    </main>
  );
}

export default Contact;