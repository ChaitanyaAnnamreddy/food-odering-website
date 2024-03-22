function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to contact us </p>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <br />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          ></input>
          <br />
        </div>
      </form>
    </div>
  );
}

export default Contact;
