import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;

    const { name } = this.props;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Decrement
        </button>

        <h2>Name: {name}</h2>
        <p>Location: Bangalore, India</p>
        <p>Contact: @xxxxxxx</p>
      </div>
    );
  }
}

export default UserClass;
