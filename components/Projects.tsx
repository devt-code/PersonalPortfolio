"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import KambazImg from "@/app/images/Kambaz.png";
import SmartCalImg from "@/app/images/SmartCal.png";
import HealthCareImg from "@/app/images/HealthCare.jpeg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Kambaz - Learning Management System",
      description:
        "A full-stack learning management system with role-based access control, course management, and secure authentication. Hosted on Vercel and Render.",
      technologies: ["React", "Express.js", "Node.js", "MongoDB", "TypeScript"],
      github: "https://github.com/devt-code/-kambaz-next-js",
      demo: "https://kambaz-next-js-git-project-deva-sai-sunder-tangellas-projects.vercel.app/",
      image: KambazImg,
    },
    {
      title: "SmartCal - Multi-Calendar Scheduling",
      description:
        "A Java-based virtual calendar system supporting multiple calendars with independent timezones, recurring events, and CSV/iCal export functionality.",
      technologies: ["Java", "Java Swing", "MVC Architecture"],
      github:
        "https://github.com/devt-code/SmartCal-Multi-Calendar-Scheduling-System",
      image: SmartCalImg,
    },
    {
      title: "HealthCare - Disease Prediction System",
      description:
        "ML-powered system for predicting lung and heart diseases with 94% accuracy using CNNs for X-ray classification and Logistic Regression for risk prediction.",
      technologies: ["Python", "Flask", "CNN", "Machine Learning"],
      github: "https://github.com/devt-code/HealthCare",
      image: HealthCareImg,
    },
    // {
    //   title: 'RESTful Automation Services',
    //   description: 'Designed and deployed RESTful automation services at Oracle to replace manual VSTP configuration workflows, reducing latency by 80%.',
    //   technologies: ['REST APIs', 'Java', 'Oracle Cloud', 'Automation'],
    //   github: 'https://github.com/devt-code',
    //   demo: 'https://example.com',
    //   image: '/api/placeholder/600/400',
    // },
    // {
    //   title: 'VM Networking Migration',
    //   description: 'Migrated production VM networking from IPv4 to dual-stack IPv4/IPv6 at Oracle, enabling horizontal scalability and mitigating IP exhaustion risks.',
    //   technologies: ['Cloud Infrastructure', 'Networking', 'IPv6', 'OCI'],
    //   github: 'https://github.com/devt-code',
    //   demo: 'https://example.com',
    //   image: '/api/placeholder/600/400',
    // },
    // {
    //   title: 'CI/CD Pipeline Automation',
    //   description: 'Built Jenkins-based CI pipelines with automated failure detection and retry logic, reducing test execution overhead by 40% at Oracle.',
    //   technologies: ['Jenkins', 'CI/CD', 'Terraform', 'Ansible'],
    //   github: 'https://github.com/devt-code',
    //   demo: 'https://example.com',
    //   image: '/api/placeholder/600/400',
    // },
  ];

  return (
    <section id="projects" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A collection of projects I’ve built, showcasing my skills and passion
          for creating innovative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card group overflow-hidden"
            >
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  placeholder="blur"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FiGithub /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <FiExternalLink /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
