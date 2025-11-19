'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="download" className="section-padding bg-gradient-to-br from-dark via-primary/5 to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-2xl rotate-12 animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="card border-2 border-primary/30 text-center p-12 sm:p-16 bg-dark-light/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block bg-primary/10 border border-primary/30 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-8">
                🚀 Commence ta transformation aujourd'hui
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Prêt à transformer
                <br />
                <span className="gradient-text">ton corps ?</span>
              </h2>

              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                Rejoins des milliers d'utilisateurs qui ont déjà commencé leur transformation avec Fit Coach.
              </p>

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-dark/50 rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                  <p className="text-white/60 text-sm">Utilisateurs actifs</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="bg-dark/50 rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                  <p className="text-white/60 text-sm">Note sur l'App Store</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="bg-dark/50 rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-white/60 text-sm">Recommandent</p>
                </motion.div>
              </div>

              {/* App Store Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
              >
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 text-lg"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Télécharger sur l'App Store
                </a>

                {/* Android Coming Soon (optional) */}
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
                  </svg>
                  <span>Android bientôt disponible</span>
                </div>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

