import React from "react";
import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer} >
      <div className="container">
        <span>
          Created by Hakan, Ben, Aleksandre, and Arpi.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
