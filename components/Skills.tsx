'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FiCode,
  FiDatabase,
  FiCloud,
  FiSmartphone,
  FiLayers,
  FiZap,
} from 'react-icons/fi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      icon: FiCode,
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiDatabase,
      title: 'Backend/Web',
      skills: ['Node.js', 'Express', 'Flask', 'Spring Boot', 'REST APIs'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiCloud,
      title: 'Cloud & DevOps',
      skills: ['OCI', 'Terraform', 'Ansible', 'Jenkins', 'Git'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiLayers,
      title: 'Frontend',
      skills: ['React', 'Redux', 'Next.js', 'Tailwind CSS', 'Java Swing'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiDatabase,
      title: 'Databases',
      skills: ['MongoDB', 'SQL', 'Firebase', 'MongoDB Atlas'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FiZap,
      title: 'Testing & Tools',
      skills: ['Selenium', 'PyTest', 'Behave', 'Linux', 'Docker'],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
