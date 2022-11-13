import './contact-page.styles.scss';

const Contact = () => {
  const initializeErrorWarning = () => {
    document.querySelector('.message-field').classList.remove('hidden');
    document.querySelector('.message-field').classList.add('shown');
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (document.getElementById('message').value === '') {
      initializeErrorWarning();
    }
  };

  const handleChange = event => {
    if (event.target.value !== '') {
      document.querySelector('.message-field').classList.add('hidden');
      document.querySelector('.message-field').classList.remove('shown');
    }
    if (event.target.value === '') {
      initializeErrorWarning();
    }
  };

  return (
    <div className="contact-container">
      <header className="header">
        <h1 className="heading-1">Contact Me</h1>
        <span>
          Hi there, contact me to ask me about anything you have in mind
        </span>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <div className="name-container">
          <div className="form-field names">
            <label className="label-text" htmlFor="first_name">
              First name
            </label>
            <input
              id="first_name"
              type="text"
              placeholder="Enter your first name"
              name="first_name"
              required
            />
          </div>
          <div className="form-field names">
            <label className="label-text" htmlFor="last_name">
              Last name
            </label>
            <input
              id="last_name"
              type="text"
              placeholder="Enter your last name"
              name="last_name"
              required
            />
          </div>
        </div>
        <div className="form-field">
          <label className="label-text" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="yourname@email.com"
            name="email"
            required
          />
        </div>
        <div className="form-field message-field hidden">
          <label className="label-text" htmlFor="message">
            Message
          </label>
          <textarea
            onChange={handleChange}
            id="message"
            type="text"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            name="message"
            // required
            className="textarea"
          />
          <span className="error-message">Please enter a message</span>
        </div>
        <div className="checkbox">
          <input
            className="checkbox-input"
            id="checkbox"
            type="checkbox"
            name="checkbox"
          />
          <label className="checkbox-label-text" htmlFor="checkbox">
            You agree to providing your data to AzubuineU who may contact you.
          </label>
        </div>

        <button className="btn" id="btn__submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
