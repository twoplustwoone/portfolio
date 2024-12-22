import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import FadeIn from "../../components/fadeIn/FadeIn";
import personAtDesk from "../../assets/lottie/personAtDesk";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div
      className={isDark ? "dark-mode main skills" : "main skills"}
      id="skills"
    >
      <div className="skills-main-div">
        <FadeIn xOffset={-20} duration={1}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={personAtDesk} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </FadeIn>
        <FadeIn xOffset={20} duration={1}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}
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
              {skillsSection.skills.map((skills, i) => (
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
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
