'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  "Coach IA personnel illimité",
  "Programmes d'entraînement personnalisés",
  "Séances guidées avec timer",
  "Suivi détaillé des performances",
  "Statistiques et graphiques avancés",
  "Bibliothèque complète d'exercices",
  "Création de séances personnalisées",
  "Historique complet",
  "Mises à jour régulières",
  "Support prioritaire",
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Abonnements
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Commence ton
            <br />
            <span className="gradient-text">essai gratuit</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Teste toutes les fonctionnalités premium gratuitement pendant 3 jours. Sans engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card border-2 border-primary/30 relative overflow-hidden">
             {/* Background glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 sm:p-12 items-center">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                  ✨ Accès Illimité
                </div>
                <h3 className="text-3xl font-bold mb-4">Fit Coach Premium</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Débloque tout le potentiel de ton corps avec l'IA. Accès complet à toutes les fonctionnalités, programmes illimités et suivi avancé.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#download"
                    className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Démarrer l'essai gratuit
                  </a>
                </div>
                <p className="text-white/40 text-sm mt-4 text-center lg:text-left">
                  3 jours offerts • Annulation facile via Apple ID
                </p>
              </div>

              <div className="flex-1 w-full lg:w-auto bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10">
                <h4 className="font-bold text-lg mb-4 text-white">Tout ce qui est inclus :</h4>
                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center gap-3 text-white/60">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Paiement sécurisé Apple</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/60">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Aucun engagement</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/60">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Mises à jour gratuites</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
