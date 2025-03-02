import {
  mobile,
  backend,
  creator,
  starbucks,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  diabetis,
  lexisight,
  weather,
  weather_ai,
  cronjob,
  recipeshare,
  web,
  autocad,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Electrical Engineer",
    icon: creator,
  },
  {
    title: "2D & 3D CAD",
    icon: autocad,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Apprentice",
    company_name: "Indian Oil Corporation Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - February 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "E-School: A Website to Learn Freely with Freedom",
    description:
      "E-School is a website that provides free and open access to educational resources. The website is mission is to make education accessible to everyone, regardless of their location, income, or background. E-School offers a wide variety of educational content, including courses, resources, and a community of learners.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "purple-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/ManishBej/E-School.git",
    live_demo_link: "https://manishbej.github.io/E-School/"
  },
  {
    name: "WATER TANK WATER LEVEL CONTROLLER",
    description:
      "This project builds a smart water tank controller using an ultrasonic sensor and NodeMCU. It monitors water level and controls a pump. This system helps prevent water wastage and allows users to monitor water levels from anywhere.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "ESP 32",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "blank",
    live_demo_link: "blank"
  },
  {
    name: "SPECTACULAR SPECTACLES",
    description:
      "Developed Spectacular Spectacles, a full-stack e-commerce platform for premium eyewear inspired by Lenskart. Built with React.js and Node.js, featuring a modern tech stack including Redux for state management, Chakra UI for responsive design, and MongoDB for data persistence. Implemented key functionalities including user authentication with JWT, product catalog with advanced filtering, shopping cart with real-time updates, secure payment processing, and order management.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ManishBej/Spectacular-Spectacles-Frontend.git",
    live_demo_link: "https://spectacular-spectacles.netlify.app/"
  },
  {
    name: "PREDICTIVE ANALYSIS OF CHRONIC DISEASES",
    description:
      "This project involved developing predictive models for diagnosing diabetes, heart disease, and cancer using machine learning techniques. I utilized Python and libraries such as Pandas, Scikit-learn, and Imbalanced-learn to preprocess datasets, handle missing values, and address class imbalance with SMOTE. Logistic Regression models were trained and evaluated for each disease, achieving significant accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: diabetis,
    source_code_link: "https://colab.research.google.com/drive/114UeX1_c7L5Zpi71yXMlOOlgNlt5IsKu?usp=sharing",
    live_demo_link: "blank"
  },
  {
      name: "LEXISIGHT",
      description:
        "AI Powered Legal Assistant: Developed an end-to-end AI system to assist with legal scenarios by automating case judgment retrieval, generating structured datasets, and providing legal insights through a scalable MERN stack web app. Leveraged technologies like NLP, PyTorch, XLNet, and RAG to ensure accurate legal advice, efficient data processing, and seamless user interaction.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "RAG",
          color: "pink-text-gradient",
        },
        {
                  name: "XLNet",
                  color: "#f8f8f8",
                },
                {
                  name: "PyTorch",
                  color: "#ff8c00",
                },
        
      ],
      image: lexisight,
      source_code_link: "blank",
      live_demo_link: "blank"
    },

{
    name: "WEATHER FORECAST",
    description:
      "Developed a Weather Forecast App using Next.js that retrieves and displays weather data from AccuWeather’s API. The application features a responsive interface, allowing users to search for locations by city and view current weather conditions, a 5-day forecast, and an hourly forecast. Additional weather details such as wind speed, humidity, and feels like temperature are also provided. Deployed the Weather Forecast App on Vercel, leveraging its seamless integration with Next.js for optimized performance and scalability.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "AccuWeather API",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ManishBej/Weather-Forecast.git",
    live_demo_link: "https://weather-forecast-fawn-gamma.vercel.app/"
  },
  {
    name: "GLOBAL WEATHER ANALYSIS AND FORECASTING",
    description:
      "In this project, I analyzed a dataset called Global Weather Repository, which contains daily weather data for cities around the world. The main goal was to clean and explore the data, then build forecasting models to predict future weather. I also did some advanced analyses like anomaly detection, air quality correlation, and spatial analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: weather_ai,
    source_code_link: "https://github.com/ManishBej/Global-Weather-Analysis-and-Forecasting-AI-PMA.git",
    live_demo_link: "blank"
  },
{
    name: "CRONMASTER - INTELLIGENT JOB SCHEDULING PLATFORM",
    description:
      "Engineered a modern full-stack application using Next.js and NestJS, enabling automated task scheduling and webhook management. Implemented real-time cron job monitoring, RESTful API integration, and MongoDB data persistence. Developed features including job scheduling, webhook processing, and comprehensive error handling. Technologies: TypeScript, Next.js, Nest.JS, MongoDB, React Query, TailwindCSS.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "NEST.JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: cronjob,
    source_code_link: "https://github.com/ManishBej/Cron-job-app.git",
    live_demo_link: "https://corn-frontend-five.vercel.app/"
  },
  {
    name: "RECIPE SHARE",
    description:
      "Developed a full-stack Recipe Sharing application using React, Material-UI, Node.js, Express, and MongoDB. Implemented user authentication, recipe management, AI-powered recipe suggestions, and a responsive design for seamless user experience across devices. Deployed on Vercel, ensuring scalability and reliability.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: recipeshare,
    source_code_link: "https://github.com/ManishBej/Recipe-Share-App.git",
    live_demo_link: "https://recipe-frontend-umber.vercel.app/"
  },
];

export { services, technologies, experiences, projects };