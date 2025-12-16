'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
                ✨ Nouveau : Coach IA disponible 24/7
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Ton corps.
              <br />
              Ton coach.
              <br />
              <span className="gradient-text">Ta transformation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Un coach personnel intelligent disponible 24/7. Des programmes sur-mesure qui s'adaptent à <span className="text-white font-semibold">TOI</span>. Commence ta transformation dès aujourd'hui.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#download"
                className="btn-primary inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Télécharger gratuitement
              </a>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="btn-secondary inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                Voir comment ça marche
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Essai gratuit 3 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Aucune carte bancaire requise</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Annulation en 1 clic</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Glow Effect behind phone */}
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full transform scale-90" />
              
              {/* App screenshot - Clean & Simple */}
              <div className="relative z-10">
                <img
                  src="/images/screen1.png"
                  alt="Fit Coach App Interface"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-4 top-1/4 bg-dark-light/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10 z-20"
              >
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-white/60">Coach IA</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-4 top-1/2 bg-dark-light/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10 z-20"
              >
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-white/60">Personnalisé</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('features')}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-wider">Découvrir</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </motion.div>
    </section>
  )
}
