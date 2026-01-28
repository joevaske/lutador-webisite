import FadeIn from "../animations/FadeIn";
import "./TestStranica.css";

import { motion } from "framer-motion";

const TestStranica = () => {
  return (
    <FadeIn>
      <h3>Test fade in</h3>
    </FadeIn>
  );
};

export default TestStranica;
