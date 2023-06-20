import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealNX = ({ children, width = "100%" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -1000 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/*

<motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          background: "var(--color-primary)",
          zIndex: 20,
        }}
      ></motion.div>

*/
