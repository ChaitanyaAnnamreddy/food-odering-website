import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        html_url: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/chaitanyaannamreddy"
    );
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, html_url, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="user-avatar" src={avatar_url} alt={name} />
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Github URL: </b>
          {html_url}
        </p>
        <p>
          <b>Bio: </b>
          {bio}
        </p>
        <p>
          <b>Location: </b> {location}{" "}
        </p>
      </div>
    );
  }
}

export default UserClass;
