import React, {useContext} from "react";
import "./Footer.scss";
import {motion} from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import BuyMeACoffee from "../buyMeACoffee/BuyMeACoffee";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const className = isDark ? "dark-mode footer-text" : "footer-text";

  const fadeInVariants = {
    hidden: {opacity: 0, y: 50},
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
      variants={fadeInVariants}
      className="footer-div"
    >
      <p className={className}>Like my stuff?</p>
      <p className={className}>
        <BuyMeACoffee />
      </p>
    </motion.div>
  );
}
