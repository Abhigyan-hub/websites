import React from "react";
import styles from "./Main.module.css";

const ProjectImages = () => {
  return (
    <div className={styles.projectImagesWrapper}>
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={require("../Images/1.jpg")}
          alt="My Image"
          className={styles.images}
        />
      }
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={require("../Images/2.jpg")}
          alt="My Image"
          className={styles.images}
        />
      }
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={require("../Images/3.jpg")}
          alt="My Image"
          className={styles.images}
        />
      }
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={require("../Images/4.jpg")}
          alt="My Image"
          className={styles.images}
        />
      }
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={require("../Images/5.jpg")}
          alt="My Image"
          className={styles.images}
        />
      }
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={require("../Images/6.png")}
          alt="My Image"
          className={styles.images}
        />
      }
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={require("../Images/7.png")}
          alt="My Image"
          className={styles.images}
        />
      }
    </div>
  );
};

export default ProjectImages;
