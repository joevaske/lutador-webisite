import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const CountUp = ({ to, from = 0, duration = 1.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // start with a motion value
  const motionVal = useMotionValue(0);

  // but we use state to *display* it
  const [display, setDisplay] = useState(0);

  // spring makes it smooth
  const spring = useSpring(motionVal, {
    stiffness: 50,
    damping: 10,
    duration,
  });

  useEffect(() => {
    spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [spring]);

  useEffect(() => {
    if (isInView) {
      motionVal.set(to); // animate from current to target
    }
  }, [isInView, to, motionVal]);

  return <span ref={ref}>{display}</span>;
};

export default CountUp;
