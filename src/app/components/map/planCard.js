import React from "react";
import * as styles from "./planCard.scss";

export default class PlanCard extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <div className={styles["planCard"]}>
        <div className={styles["fir-image-figure"]}>
          <div className={styles["left-20"]}>
            <img className={styles["fir-clickcircle"]}
                 src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/26992356_574807149527770_1756966645001432152_n.jpg?oh=4ff13172d22daf8ba7538d80fe5057d8&oe=5B237390"></img>
              <button className={styles["button"]}> JOIN </button>
          </div>

        <div className={styles["right-80"]}>
          <h3>Aleksandre Ninua</h3>
          <p className={styles["label"]}>from:</p>
          <h5>UCLA De Neve Turnaround</h5>
          <p className={styles["label"]}>at:</p>
          <h5>7:30 pm</h5>
          <p className={styles["label"]}>with:</p>
          <h5>Timothy Gu, Ben Limpanukorn, Yvonne Chen, Hakan Alpay</h5>
        </div>

        </div>
      </div>

    );
  }
}
