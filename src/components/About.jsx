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
        {/* I'm a skilled software developer with experience in Python and
        JavaScript, and expertise in other technologies like html, css , wordpress etc. 
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life! */}
        Dynamic and detail-oriented Frontend Engineer with a robust background
        in web development, coding since high school. Proficient in HTML, CSS,
        JavaScript, React, and Python, with hands-on experience in advanced
        frameworks like React-Redux and Django. Adept at creating intuitive,
        responsive, and user-centric web applications, leveraging modern
        technologies such as Tailwind CSS and Git. Known for rapid learning and
        adaptation, with a track record of successfully delivering diverse
        projects from e-commerce platforms to interactive games. Currently
        pursuing a B.Sc. in Computer Science at Aligarh Muslim University,
        demonstrating a strong academic foundation and a relentless passion for
        continuous learning and innovation in the tech field. Ready to bring
        creative solutions and a fresh perspective to your team.
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
