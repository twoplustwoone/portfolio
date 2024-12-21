import React, {useContext} from "react";
import "./Footer.scss";
import FadeIn from "../fadeIn/FadeIn";
import StyleContext from "../../contexts/StyleContext";
import BuyMeACoffee from "../buyMeACoffee/BuyMeACoffee";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const className = isDark ? "dark-mode footer-text" : "footer-text";

  return (
    <FadeIn yOffset={50}>
      <div className="footer-div">
        <p className={className}>Like my stuff?</p>
        <p className={className}>
          <BuyMeACoffee />
        </p>
      </div>
    </FadeIn>
  );
}
