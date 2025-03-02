import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { RegularLoader } from "./Loader";
import ErrorBoundary from "./ErrorBoundary";

// Use normal import for mobile to prevent lazy loading issues
import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Only use intersection observer for desktop view
    if (!isMobile) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    } else {
      // For mobile, make cards immediately visible
      setIsVisible(true);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMobile]);

  const handleDemoClick = (e) => {
    e.stopPropagation();
    if (live_demo_link && live_demo_link !== "blank") {
      window.open(live_demo_link, "_blank");
    }
  };

  const Card = ({ children }) => {
    if (isMobile) {
      return (
        <div className='bg-tertiary p-5 rounded-2xl w-full min-h-[450px]'>
          {children}
        </div>
      );
    }
    return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary p-5 rounded-2xl w-full cursor-pointer transition-all duration-300 
                   ${isHovered ? 'project-card-hovered shadow-[0_0_20px_rgba(145,94,255,0.3)]' : 'shadow-xl'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Tilt>
    );
  };

  return (
    <div 
      ref={cardRef}
      className={`w-full sm:w-[360px] px-2 mb-10 ${!isMobile && isVisible ? 'popup-animation' : ''}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        animationDelay: `${index * 0.15}s`
      }}
    >
      <ErrorBoundary>
        <Card>
          <div className='relative w-full h-[230px]'>
            {!imageLoaded && <div className="absolute inset-0 flex items-center justify-center"><RegularLoader /></div>}
            <img
              src={image}
              alt='project_image'
              className={`w-full h-full object-cover rounded-2xl transition-transform duration-300
                         ${!isMobile && isHovered ? 'scale-105' : 'scale-100'}`}
              style={{ opacity: imageLoaded ? 1 : 0 }}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
              width="360"
              height="230"
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              {source_code_link && source_code_link !== "blank" && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_code_link, "_blank");
                  }}
                  className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
                            transition-all duration-300 ${!isMobile && isHovered ? 'rotate-[360deg]' : ''} mr-2`}
                  title="View Source Code"
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                </div>
              )}
              {live_demo_link && live_demo_link !== "blank" && (
                <div
                  onClick={handleDemoClick}
                  className={`bg-gradient-to-r from-purple-600 to-blue-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
                            transition-all duration-300 ${!isMobile && isHovered ? 'scale-110' : ''}`}
                  title="View Live Demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className='mt-5'>
            <h3 className={`text-white font-bold text-[24px] transition-all duration-300
                           ${!isMobile && isHovered ? 'text-[#915EFF]' : ''}`}>
              {name}
            </h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color} transition-all duration-300
                           ${!isMobile && isHovered ? 'opacity-100' : 'opacity-80'}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Live Demo Button */}
          <div className="mt-5 flex justify-center">
            {live_demo_link && live_demo_link !== "blank" ? (
              <button 
                onClick={handleDemoClick}
                className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary
                          bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600
                          transition-all duration-300 ${!isMobile && isHovered ? 'scale-105' : ''}`}
              >
                Live Demo
              </button>
            ) : (
              <button 
                disabled
                className="py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md 
                         bg-gray-600 opacity-50 cursor-not-allowed"
              >
                Demo Unavailable
              </button>
            )}
          </div>
        </Card>
      </ErrorBoundary>
    </div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
  
  return (
    <>
      <div className='mt-20 flex flex-col gap-7'>
        {/* Use regular div for mobile to ensure visibility */}
        {isMobile ? (
          <>
            <div>
              <p className={`${styles.sectionSubText} text-center`}>My work</p>
              <h2 className={`${styles.sectionHeadText} text-center mb-5`}>Projects.</h2>
            </div>
            <div className='w-full'>
              <p className='mt-3 text-secondary text-[16px] max-w-3xl mx-auto text-center leading-[28px] px-4'>
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it.
              </p>
            </div>
          </>
        ) : (
          <>
            <motion.div variants={textVariant()}>
              <p className={"text-3xl font-bold text-primary dark:text-secondary"}>My work</p>
              <h2 className={`${styles.sectionHeadText} `}>Projects.</h2>
            </motion.div>
            <div className='w-full'>
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="text-textDark dark:text-textLight"
              >
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
              </motion.p>
            </div>
          </>
        )}
      </div>

      <div className='mt-20 flex flex-wrap justify-center'>
        {projects?.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");