'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          About Me
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            I’m a Computer Science graduate student at Northeastern University with a strong foundation in
            full-stack development, cloud infrastructure, and automation. Currently pursuing my Master’s degree
            with a perfect 4.0 GPA, I bring a blend of academic excellence and real-world industry experience
            from my time at Oracle.
          </p>
          
          <p>
            During my tenure as an Associate Software Developer at Oracle, I designed and deployed RESTful
            automation services, migrated production systems to dual-stack IPv4/IPv6, and built CI/CD pipelines
            that significantly improved efficiency. I’m passionate about building scalable solutions and
            leveraging modern technologies to solve complex problems.
          </p>
          
          <p>
            When I’m not coding, you can find me exploring new technologies, working on side projects, or
            contributing to open-source initiatives. I’m always eager to learn and apply new skills to create
            innovative solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '4.0', label: 'GPA (Master\'s)' },
            { number: '2+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Completed' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 card"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
