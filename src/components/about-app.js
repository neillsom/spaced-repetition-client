import React from "react";
// import "./about-app.css";
import { connect } from "react-redux";
import { info } from "../actions/auth";

export function About(props) {
  return (
    <div className="overlay">
      <div className="content">
        <h3> h3 header </h3>
        <h2>h2 header </h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}</p>
    <p> Excepteur sint</p>
    <button>
      <a className="close" onClick={event=> {
              props.dispatch(info(event));
            }}
          >
            Ok button!
          </a>
    </button>
  </div>
</div>
  );
}

export default connect()(About);
