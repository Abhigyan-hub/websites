import React from "react";

const Hero = () => {
  return (
    <div>
      {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src={require("../Images/Hero.png")} alt="My Image" />
      }
    </div>
  );
};

export default Hero;
