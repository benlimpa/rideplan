import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import * as styles from "./header.scss";

const Header = (props) => {
  return (
    <div className={classNames("container", styles.header)}>
      <Link className="m-2" to="/">Logo</Link>
      <ul className="nav d-inline-flex">
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/"})}
            to="/"
          >
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/about"})}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default connect(state => { return {url: state.router.location.pathname}; })(Header);
