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
      <div className="text-gray-500 mt-60 text-center bg-white">
        <UserClass />
      </div>
    );
  }
}

export default About;
