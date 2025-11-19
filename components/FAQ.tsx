'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    question: "Ai-je besoin d'équipement spécifique ?",
    answer: "Non ! L'app s'adapte à ton équipement disponible. Que tu aies une salle complète, quelques haltères ou rien du tout, l'IA génère des programmes adaptés à ta situation.",
  },
  {
    question: "Est-ce adapté aux débutants ?",
    answer: "Absolument ! L'onboarding évalue ton niveau réel et adapte les programmes en conséquence. La séance d'évaluation permet de calibrer précisément ton niveau de forme physique.",
  },
  {
    question: "Puis-je annuler mon abonnement ?",
    answer: "Oui, à tout moment depuis les réglages de ton compte Apple. Aucun engagement, aucune question posée. Tu gardes l'accès jusqu'à la fin de ta période payée.",
  },
  {
    question: "Comment fonctionne l'essai gratuit ?",
    answer: "3 jours d'accès complet à toutes les fonctionnalités premium. Tu ne seras débité qu'après la période d'essai. Annulation possible à tout moment avant la fin de l'essai.",
  },
  {
    question: "L'app remplace-t-elle un vrai coach ?",
    answer: "Fit Coach offre une alternative accessible et efficace pour la plupart des objectifs fitness. Pour des besoins très spécifiques (rééducation, compétition de haut niveau), un coach humain reste recommandé en complément.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Oui, toutes tes données sont chiffrées et stockées de manière sécurisée conformément au RGPD. Nous ne vendons jamais tes informations personnelles à des tiers.",
  },
  {
    question: "Puis-je créer mes propres séances ?",
    answer: "Oui ! En plus des programmes générés par l'IA, tu peux créer des séances 100% personnalisées avec notre bibliothèque d'exercices complète. Organise-les en circuits, supersets, ou séries classiques.",
  },
  {
    question: "L'app est-elle disponible sur Android ?",
    answer: "Fit Coach est actuellement disponible sur iOS (iPhone et iPad). La version Android est en développement et sera bientôt disponible. Inscris-toi sur notre site pour être notifié du lancement.",
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card border border-white/10 hover:border-primary/30 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-bold text-lg pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/70 pt-4 mt-4 border-t border-white/10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="section-padding bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Questions
            <br />
            <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tu as des questions ? On a des réponses. Si tu ne trouves pas ce que tu cherches, contacte-nous.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-dark/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <p className="text-lg mb-4">
              Tu as une autre question ?
            </p>
            <a
              href="mailto:contact@fitcoach.app"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contacte-nous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

