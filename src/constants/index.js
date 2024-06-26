// eslint-disable-next-line no-unused-vars
import { backend, web, java , javascript, typescript, html, css, reactjs, redux, nodejs,spring, mongodb, redis, k8s, kafka, rabbit, git, docker, leap, acb, hcmut, oracle, mysql, bootstrap, f1, survey, quality } from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "Java",
    icon: java,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "RabbitMQ",
    icon: rabbit,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "mySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: k8s,
  },
];

const experiences = [

  {
    title: "Backend Java Developer",
    company_name: "Asia Commercial Bank(ACB)",
    icon: acb,
    iconBg: "#F8F6F4",
    date: "August 2023 -  Present",
    points: [
      "Building Payment School Fee System, Integrate EVNCPC and BWACO bill payment.",
      "Work directly with Tech Leader and Product Owner to determine the system’s roadmap and tasks. Build features and improvements based on the roadmap.",
      "Design a database for uploading and exporting many types of data templates.",
      "Read and analyze connection documents from partners, then integrate them into the system.",
      "Participate in code, technology and banking reviews.",
      "Check and handle arising errors as well as optimize the system during testing and operation.",
    ],
  },
  
  {
    title: "Full-Stack Web Developer",
    company_name: "Data and Information Technology Center of Ho Chi Minh City University of Technology",
    icon: hcmut,
    iconBg: "#F8F6F4",
    date: "March 2022 - August 2023",
    points: [
      "Building a quality assurance system for Office for International Study Programs (OISP) in Ho Chi Minh City University of Technology.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participate in analysis, record and clarify user's business requirements, propose solutions to deploy the system.",
      "Check and handle arising errors as well as optimize the system during operation",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Intern Full-Stack Web Developer",
    company_name: "LEAP",
    icon: leap,
    iconBg: "#383E56",
    date: "2020 -  2021",
    points: [
      "Learn about the Java programming language",
      "Learn about SpringBoot framework",
      "Developing simple web application has CRUD with Jhipster( React, SpringBoot).",
      "Developing and maintaining slack bot using SpringBoot and other related technologies.",
      "Participating in code reviews with leader and write reports on product features.",
    ],
  },
];


const projects = [
  {
    name: "Survey of Quality Assurance System",
    description:
      'Web application that enables users to manage survey, question. Send an email to participate in the survey, Send automatic email reminders to take surveys, Dashboard to track results year by year, Statistics and extracting results into reports...',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "oracle",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "rabbitMQ",
        color: "pink-text-gradient",
      },
    ],
    image: survey,
    source_code_link: "https://drive.google.com/drive/folders/1geFlDdl3m-3dwD7Mp-6NYpAqKGCQ7R82?usp=sharing",
  },
  {
    name: "ISO of Quality Assurance System",
    description:
      "Web application that enables users to manage quality goals, Send email to office employees, Send automatic email reminders to input data of quality goals, Dashboard to track quality goal, Statistics and extracting data into reports...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "oracle",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "rabbitMQ",
        color: "pink-text-gradient",
      },
    ],
    image: quality,
    source_code_link: "https://drive.google.com/drive/folders/1wtKguls_i4ySdeUWtRZbtHR7Vlk5GZ-K?usp=sharing",
  },
  {
    name: "Formula1 Race REST API Result",
    description:
      "My persional project. It's a REST API that displays content crawled from the F1 racing results at RACE RESULTS that allows searching for contents by year, driver, team, race, etc., using the results of the crawling, allow searching using various conditions (like the yearly ranking of specific teams/drivers, etc.).",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "prismaORM",
        color: "green-text-gradient",
      },
      {
        name: "sqlLite",
        color: "pink-text-gradient",
      },
    ],
    image: f1,
    source_code_link: "https://github.com/duyhuynh99/Formular1API",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };
