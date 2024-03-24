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
    console.log(data);
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, html_url, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card mt-4 shadow-l  rounded-lg mb-10 sm:py-3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet our Team
        </h2>

        <img
          className="user-avatar rounded-full mx-auto mt-4 mb-2 w-20 h-20 object-cover"
          src={avatar_url}
          alt={name}
        />
        <div className="px-4 py-2">
          <p className="text-xl font-medium text-gray-700">
            <b>Name: </b>
            {name}
          </p>
          <p className="text-gray-500">
            <b>Github URL: </b>
            {html_url}
          </p>
          <p className=" mt-6 text-lg leading-8 text-gray-600">
            <b>Bio: </b>
            {bio}
          </p>
          <p className="text-gray-500 mt-2">
            <b>Location: </b> {location}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
