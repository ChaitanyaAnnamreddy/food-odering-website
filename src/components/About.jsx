import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>Food ordering App using React</p>
        <UserClass />
      </div>
    );
  }
}

export default About;
