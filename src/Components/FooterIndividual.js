import React from "react";
import styles from "./Main.module.css";

const FooterIndividual = ({ image, title, subTitle, href }) => {
  return (
    <div className={styles.footerIndividualWrap}>
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src={image} alt="My Image" className={styles.footerImages} />
      }
      <div>{title}</div>
      <div>{subTitle}</div>
      <div className={styles.aboutFooter}>
        <div>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </div>
      </div>
      <button className={styles.footerButton} href={href}>Contact</button>
    </div>
  );
};

export default FooterIndividual;
