function Contact() {
  return (
    <div className="form">
      <h1>Contact Us</h1>
      <p>Feel free to contact us </p>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email address:</label>
          <input
            type="email1"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <br />
          <label htmlFor="name">Name:</label>
          <input
            type="text1"
            className="form-control"
            id="name"
            placeholder="Enter name"
          ></input>
          <br />
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here"
          ></textarea>
          <input type="submit" className="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default Contact;
