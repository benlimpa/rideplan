import React from "react";
import * as styles from "./planInfo.scss";
import planCard from "./planCard";
import PlanCard from "./planCard";

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
          <h2>LAX Terminal 2</h2>
          <button id={styles["closeButton"]} onClick={this.handleClick}>X</button>
          <p>Terminal 6, 600 World Way, Los Angeles, CA 90045</p>
          <button>CREATE A RIDE</button>
        </div>
        <div className={styles["numberFriendsRiding"]}>
          <h5>3 friends riding here!</h5>
        </div>

        <PlanCard />
      </div>

    );
    //return (<p>{this.props.riderMap.get(this.props.ridePlan.owner)}</p>);
  }
}
