import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <p>Location: Bangalore, India</p>
        <p>Contact: @xxxxxxx</p>
      </div>
    );
  }
}

export default UserClass;
