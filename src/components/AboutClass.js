import React from "react";
import { UserClass } from "./UserClass";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("AboutClass constructor");
  }

  componentDidMount() {
    console.log("AboutClass componentDidMount");
  }

  render() {
    console.log("AboutClass render");
    return (
      <>
        <div>About Class component</div>
        <UserClass
          username={"Archit Dutt Sharma Class"}
          location={"Dehradun class"}
        />
      </>
    );
  }
}

export default AboutClass;
