export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: delay,
        stiffness: 50,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  const isMobile = window.innerWidth <= 500;
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: isMobile ? delay * 0.5 : delay,
        duration: isMobile ? duration * 0.7 : duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  const isMobile = window.innerWidth <= 500;
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: isMobile ? delay * 0.5 : delay,
        duration: isMobile ? duration * 0.7 : duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  const isMobile = window.innerWidth <= 500;
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: isMobile ? staggerChildren * 0.5 : staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};