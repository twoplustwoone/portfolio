import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import FadeIn from "../../components/fadeIn/FadeIn";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection) {
    console.error("podcastSection object for Podcast section is missing");
  }

  if (!podcastSection.display) {
    return null;
  }

  return (
    <FadeIn yOffset={20} duration={1}>
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, i) => {
            if (!podcastLink) {
              console.log(
                `Podcast link for ${podcastSection.title} is missing`
              );
            }
            return (
              <div key={i}>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}
