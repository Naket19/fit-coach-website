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

const plans = [
  {
    name: "Mensuel",
    price: "12,99€",
    period: "/mois",
    pricePerMonth: "12,99€",
    yearlyTotal: "155,88€",
    badge: null,
    popular: false,
    savings: null,
    cta: "Commencer l'essai gratuit",
  },
  {
    name: "Annuel",
    price: "69,99€",
    period: "/an",
    pricePerMonth: "5,83€",
    yearlyTotal: "69,99€",
    badge: "⭐ Meilleure valeur",
    popular: true,
    savings: "Économise 85,89€ (55%)",
    cta: "Commencer l'essai gratuit",
  },
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
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Tarification
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Un coach personnel
            <br />
            <span className="gradient-text">accessible à tous</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tous les avantages d'un coach personnel pour moins que le prix d'un café par semaine.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Toggle or Info about both plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <p className="text-white/60">
              Choisis le plan qui te convient • Essai gratuit 3 jours sur tous les plans
            </p>
          </motion.div>

          {/* Two Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Pricing Card */}
                <div className={`card ${plan.popular ? 'border-2 border-primary/50 shadow-2xl shadow-primary/20' : 'border border-white/10'} overflow-hidden h-full`}>
                  <div className={`${plan.popular ? 'bg-gradient-to-br from-primary/10 to-transparent' : 'bg-dark-light/50'} p-8 sm:p-10`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4">Plan {plan.name}</h3>
                      
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-5xl sm:text-6xl font-bold text-primary">{plan.price}</span>
                        <span className="text-lg text-white/60">{plan.period}</span>
                      </div>

                      <p className="text-white/70 mb-4">
                        Soit <span className="font-semibold text-primary">{plan.pricePerMonth}/mois</span>
                      </p>

                      {/* Savings Badge */}
                      {plan.savings && (
                        <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full text-sm border border-green-500/30 mb-4">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-green-400 font-semibold">{plan.savings}</span>
                        </div>
                      )}
                      
                      {/* Price Comparison */}
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm border border-primary/20">
                        <span className="line-through text-white/40">{plan.yearlyTotal}/an</span>
                        {plan.popular && <span className="text-primary font-semibold">vs 155,88€</span>}
                      </div>
                    </div>

                    {/* Trial Info */}
                    <div className="bg-dark/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-base mb-2">Essai gratuit de 3 jours</h4>
                          <p className="text-white/70 text-sm">
                            Toutes les fonctionnalités gratuitement pendant 3 jours. Annule à tout moment.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features List - Condensed */}
                    <div className="space-y-3 mb-6">
                      {features.slice(0, 5).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                      <p className="text-white/50 text-sm pl-8">+ 5 autres fonctionnalités</p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#download"
                      className={`${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full inline-flex items-center justify-center gap-2 text-base`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      {plan.cta}
                    </a>

                    <p className="text-center text-xs text-white/40 mt-4">
                      {plan.name === "Mensuel" ? "Engagement mensuel" : "Engagement annuel"} • Annulation en 1 clic
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Features List Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <div className="card bg-dark-light/50">
              <h3 className="text-2xl font-bold mb-6 text-center">Toutes les fonctionnalités incluses</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid sm:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center p-6 bg-dark-light/50 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Paiement sécurisé</h4>
              <p className="text-sm text-white/60">Via Apple Pay</p>
            </div>

            <div className="text-center p-6 bg-dark-light/50 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Sans engagement</h4>
              <p className="text-sm text-white/60">Annule quand tu veux</p>
            </div>

            <div className="text-center p-6 bg-dark-light/50 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Mises à jour</h4>
              <p className="text-sm text-white/60">Nouvelles fonctionnalités</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

