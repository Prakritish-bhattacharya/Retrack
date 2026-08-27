import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="border-2 w-100">
        <h1>{this.props.name} (class)</h1>
        <h2>{this.props.contact}</h2>
        <h3>West Bengal, India</h3>
      </div>
    );
  }
}

export default UserClass
