import React from "react";
import CV from "../../assets/MaheshaVP_Resume.pdf";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href={CV}
        download="Mahesh_Resume"
        className="btn"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Download CV
      </motion.a>

      <motion.a
        href="#contact"
        className="btn btn-primary"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
