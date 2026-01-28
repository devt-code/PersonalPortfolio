'use client'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            {[
              { icon: FiGithub, href: 'https://github.com/devt-code', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/devasaisunder', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:tangella.d@northeastern.edu', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
