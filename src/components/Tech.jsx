import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div>
      <section id="skills" className="p-10 bg-background dark:bg-darkBackground">
        <h2 className="text-3xl font-bold text-primary dark:text-secondary">Skills</h2>
        <div className="mt-4">
          <p className={styles.sectionHeadText}>Technical Skills.</p>
          <p className="text-textDark dark:text-textLight">
            HTML 5, CSS 3, JAVASCRIPT, PYTHON, PYTORCH, NEXT.JS, REACT.JS, MONGODB, EXPRESS.JS, NODE.JS, FLASK, DJANGO, FASTAPI, DOCKER, DEPLOYMENTS PRODUCTION, HOSTING WEB APPLICATION, DEPLOYMENT, WEBDESIGN, WEBDEVELOPMENT, NLP, AI, ML, AI/ML, RAG, LLM, PROMPT ENGINEERING, AWS, AZURE, FIGMA, DEAMWEAVER, ADOBE XD, GITHUB, COMPUTER HARDWARE, GEN AI PROMPT ENGINEERING, MICROSOFT OFFICE 365, GIT, JIRA, AUTODESK AUTOCAD, AUTODESK INVENTOR, AUTODESK FUSION 360, AUTODESK EAGLE, ALTIUM DESIGNER, ADOBE ACROBAT, ADOBE ILLUSTRATOR, ADOBE PHOTOSHOP, ADOBE LIGHTROOM, SAP ERP, IOT, PROJECT MANAGEMENT, PPT PRESENTATION.
          </p>
        </div>
        <div className="mt-4">
          <p className={styles.sectionHeadText}>Soft Skills.</p>
          <p className="text-textDark dark:text-textLight">
            LEARNED, TENACIOUS, SAVVY, EAGER TO LEARN, PROBLEM SOLVER, PERSONABLE, INDUSTRIOUS, LOYAL, DILIGENT, CO OPERATIVE, SELF MOTIVATED, DATA DRIVEN, ENERGETIC, HIGH, ACHIEVER, RESILIENT, RESOURCEFUL, PERFECTIONIST.
          </p>
        </div>
      </section>

      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {isMobile ? (
              <div className="w-full h-full rounded-full bg-tertiary p-4 hover:shadow-card transition-all duration-300 flex items-center justify-center hover:scale-105">
                <img 
                  src={technology.icon}
                  alt={technology.name}
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");