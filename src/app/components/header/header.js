import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import * as styles from "./header.scss";




const Header = (props) => {
  return (

    <div className={styles.header}>
      <div className={"container"}>
        <Link id={styles["home"]} to={"/"}>RIDEPLAN</Link>
        <Link id={styles["myplan"]} to={"/myplans"}>My Plan</Link>


      </div>
    </div>



  );
};

  export default connect(state => { return {url: state.router.location.pathname}; })(Header);
