import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import myimage from "./abc.png";

const Logo = () => {
  return (
    <>
      <img id="image-class" src={myimage} alt="This is a image" />
    </>
  );
};

const Input = () => {
  return (
    <input
      type="text"
      placeholder="write something to search"
      id="input-box"
    ></input>
  );
};

const UserIcon = () => {
  return <img id="user-icon" src={myimage} alt="This is a image" />;
};
const HeadingComponent = () => (
  <div id="headingComponent">
    <Logo></Logo>
    <Input></Input>
    <UserIcon></UserIcon>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
