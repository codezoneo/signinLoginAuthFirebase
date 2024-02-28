import React from "react";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., sending email)
    console.log("Form submitted!");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        If you have any issues or inquiries, please fill out the form below:
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="issue">Issue:</label>
        <textarea id="issue" name="issue" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
