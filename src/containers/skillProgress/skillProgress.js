import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {motion} from "framer-motion";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    const fadeInFromBottom = {
      hidden: {opacity: 0, y: 20},
      visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 1, ease: "easeOut"}
      }
    };

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInFromBottom}
      >
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </motion.div>
    );
  }
  return null;
}
