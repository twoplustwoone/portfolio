import React from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const FadeIn = ({
  children,
  xOffset = 0,
  yOffset = 0,
  duration = 1,
  delay = 0,
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold
  });

  const fadeInVariants = {
    hidden: {opacity: 0, x: xOffset, y: yOffset},
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {duration, delay, ease: "easeOut"}
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
