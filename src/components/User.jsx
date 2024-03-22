import React from "react";

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <p>Location: xxxxx, India</p>
      <p>Contact: @chaitanya</p>
    </div>
  );
};

export default User;
