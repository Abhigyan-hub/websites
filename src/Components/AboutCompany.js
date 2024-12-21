import React from "react";
import styles from "./Main.module.css";

const AboutCompany = () => {
  return (
    <div className={styles.aboutCompanyWrapper}>
      <hr />
      <div className={styles.aboutCompany}>
        Our company specializes in launching nano-satellites and providing
        tailored services to a diverse range of clients. We also collaborate
        with various organizations to offer research services, driving
        innovation and advancement in the field.
      </div>
      <hr />
    </div>
  );
};

export default AboutCompany;
