import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import BuyMeACoffee from "../buyMeACoffee/BuyMeACoffee";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const className = isDark ? "dark-mode footer-text" : "footer-text";
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={className}>Like my stuff?</p>
        <p className={className}>
          <BuyMeACoffee />
        </p>
      </div>
    </Fade>
  );
}
