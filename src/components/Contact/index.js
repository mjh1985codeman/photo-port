function ContactForm() {
  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
