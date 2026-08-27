import React from "react";
const User = (props) => {
  return (
    <div className="border-2 w-100">
      <h1>{props.name} (function)</h1>
      <h2>{props.contact}</h2>
      <h3>West Bengal, India</h3>
    </div>
  );
};
export default User;
