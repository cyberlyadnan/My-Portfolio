import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        {/* <ul>
          <li> */}
          • Frontend Software Engineer with expertise in HTML, CSS, JavaScript,
            React.js, and related technologies.
          {/* </li>
          <li> */}
          • Experienced Trainer at Credible Academy and Institute of Skills and
            Rural Development, enhancing student engagement and knowledge
            retention.
          {/* </li>
          <li> */}
          • Freelancer delivering numerous WordPress websites, including LMS,
            blogs, eCommerce, and news sites.
          {/* </li>
          <li> */}
          • Developer of custom software solutions, such as wood management
            software in Python, streamlining client operations.
          {/* </li>
          <li> */}
          • Proven Problem Solver with a focus on delivering high-quality,
            scalable web applications.
          {/* </li>
          <li> */}
          • Strong Project Management Skills demonstrated through successful
            project completions and positive client feedback.
          {/* </li>
          <li> */}
          • Continuous Learner staying updated with the latest trends and
            technologies in frontend development.
          {/* </li>
        </ul> */}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
