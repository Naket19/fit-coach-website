'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Évaluation Personnalisée",
    description: "Réponds à quelques questions sur tes objectifs, ton niveau et ton équipement disponible.",
    duration: "2 minutes",
    color: "from-primary to-primary-dark",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Ton Programme Sur-Mesure",
    description: "L'IA génère instantanément ton programme hebdomadaire personnalisé avec ta première séance d'évaluation.",
    duration: "Instantané",
    color: "from-primary-light to-primary",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Entraîne-toi",
    description: "Lance tes séances guidées avec timer automatique et suivi des performances en temps réel.",
    duration: "30-60 min/séance",
    color: "from-primary to-red-600",
  },
  {
    number: "04",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Progresse & Adapte",
    description: "Suis ta progression, ajuste tes objectifs, et laisse l'IA adapter ton programme au fil du temps.",
    duration: "En continu",
    color: "from-red-600 to-primary",
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector Line (hidden on mobile, shown on desktop after first item) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
      )}

      <div className="card relative z-10 text-center lg:text-left h-full">
        {/* Number Badge */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white font-bold text-2xl mb-6`}>
          {step.number}
        </div>

        {/* Icon */}
        <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto lg:mx-0">
          {step.icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
        <p className="text-white/70 mb-4">{step.description}</p>

        {/* Duration Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-semibold text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{step.duration}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="section-padding bg-dark-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
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
            Comment ça marche
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Simple comme
            <br />
            <span className="gradient-text">1, 2, 3, 4</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Commence ta transformation en quelques minutes. L'IA s'occupe de tout, 
            tu n'as qu'à te concentrer sur tes entraînements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Visual Timeline for Mobile */}
        <div className="lg:hidden flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.color}`} />
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-dark/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <p className="text-2xl font-bold mb-4">
              Prêt à commencer ? 🚀
            </p>
            <p className="text-white/70 mb-6 max-w-2xl">
              Rejoins des milliers d'utilisateurs qui ont déjà transformé leur corps avec Fit Coach.
            </p>
            <a href="#download" className="btn-primary">
              Commencer gratuitement
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

