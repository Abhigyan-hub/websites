import React from "react";
import FooterAbout from "./FooterAbout";
import FooterIndividual from "./FooterIndividual";
import styles from "./Main.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerHeader}>About</div>
      <hr />
      <FooterAbout />
      <hr />
      <div className={styles.FooterIndividualWrapper}>
        <FooterIndividual
          image={require("../Images/1.jpg")}
          title={"Abhigyan"}
          subTitle="CEO & Founder"
        />
        <FooterIndividual
          image={require("../Images/1.jpg")}
          title={"Abhigyan"}
          subTitle="CEO & Founder"
        />
        <FooterIndividual
          image={require("../Images/1.jpg")}
          title={"Abhigyan"}
          subTitle="CEO & Founder"
        />
      </div>
    </div>
  );
};

export default Footer;
