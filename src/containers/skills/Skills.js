import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {motion} from "framer-motion";
import personAtDesk from "../../assets/lottie/personAtDesk";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  const fadeInLeft = {
    hidden: {opacity: 0, x: -20},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 1, ease: "easeOut"}
    }
  };

  const fadeInRight = {
    hidden: {opacity: 0, x: 20},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 1, ease: "easeOut"}
    }
  };

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          className="skills-image-div"
        >
          {illustration.animated ? (
            <DisplayLottie animationData={personAtDesk} />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assets/images/developerActivity.svg")}
            ></img>
          )}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          className="skills-text-div"
        >
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {skillsSection.title}{" "}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map((skills, i) => {
              return (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {skills}
                </p>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
