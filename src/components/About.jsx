import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
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
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      As a tenacious and resourceful individual, I am passionate about developing cutting-edge solutions at the intersection of full-stack development and artificial intelligence. Currently pursuing my Bachelor’s in Information Technology, I have a strong foundation in technologies such as React, Next.js, FastAPI, Flask, Django, and MongoDB, complemented by hands-on experience with Tailwind CSS, Bootstrap, Express, and Node.js. Alongside my full-stack development skills, I am equally focused on advancing my knowledge in AI, specifically in Generative AI model development using PyTorch, LLMs, NLP, RAG, and vector databases. I thrive in dynamic environments that challenge my problem-solving abilities and allow me to continuously grow as a professional. My experience working with industry tools like SAP ERP during my internship at Indian Oil Corporation has equipped me with the technical and interpersonal skills to excel in team-oriented settings. A self-motivated and data-driven individual, I am eager to contribute to innovative projects as a Full-Stack Developer and AI Engineer, leveraging my diverse skill set to deliver impactful and scalable solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");