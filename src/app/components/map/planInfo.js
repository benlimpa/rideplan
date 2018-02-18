import React from "react";
import * as styles from "./planInfo.scss";

export default class PlanInfo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick()
  {
    this.props.close();
  }
  render()
  {
    return (
      <div className={styles["infoPlan"]}>
        <div className={styles["infoHeader"]}>
          <h3>LAX Terminal 2</h3>
          <button id={styles["closeButton"]} onClick={this.handleClick}>X</button>
          <p>Terminal 6, 600 World Way, Los Angeles, CA 90045</p>
          <button>CREATE A RIDE</button>
        </div>
        <div className={styles["numberFriendsRiding"]}>
          <h6>3 friends riding here!</h6>
        </div>
        <div className={styles["friendPlan"]}>
          <h1>Alexandre</h1>

        </div>
      </div>

    );
    //return (<p>{this.props.riderMap.get(this.props.ridePlan.owner)}</p>);
  }
}
