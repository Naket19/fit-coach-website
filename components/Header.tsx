'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 relative group-hover:scale-110 transition-transform">
              <img
                src="/images/logo.png"
                alt="Fit Coach Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold">Fit Coach</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Comment ça marche
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white/80 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <a
              href="#download"
              className="btn-primary"
            >
              Télécharger
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <button
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left py-2 text-white/80 hover:text-white transition-colors"
                >
                  Fonctionnalités
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left py-2 text-white/80 hover:text-white transition-colors"
                >
                  Comment ça marche
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left py-2 text-white/80 hover:text-white transition-colors"
                >
                  Tarifs
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left py-2 text-white/80 hover:text-white transition-colors"
                >
                  FAQ
                </button>
                <a
                  href="#download"
                  className="block btn-primary text-center"
                >
                  Télécharger
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

