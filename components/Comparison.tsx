'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const comparisonData = [
  { label: "Prix", traditional: "60-100€/séance", fitcoach: "12,99€/mois", highlight: true },
  { label: "Disponibilité", traditional: "Rendez-vous fixe", fitcoach: "24/7", highlight: true },
  { label: "Personnalisation", traditional: "✓", fitcoach: "✓", highlight: false },
  { label: "Suivi progression", traditional: "Manuel", fitcoach: "✓ Automatique", highlight: true },
  { label: "Flexibilité", traditional: "Limitée", fitcoach: "✓ Totale", highlight: true },
]

export default function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Comparaison
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Fit Coach vs
            <br />
            <span className="gradient-text">Coach Traditionnel</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tous les avantages d'un coach personnel, sans les inconvénients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Desktop Table */}
          <div className="hidden md:block card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-6 px-6 font-bold text-lg">Critère</th>
                  <th className="text-center py-6 px-6 font-bold text-lg text-white/60">Coach Personnel</th>
                  <th className="text-center py-6 px-6 font-bold text-lg">
                    <span className="gradient-text">Fit Coach</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`border-b border-white/5 ${row.highlight ? 'bg-primary/5' : ''}`}
                  >
                    <td className="py-6 px-6 font-semibold">{row.label}</td>
                    <td className="py-6 px-6 text-center text-white/60">{row.traditional}</td>
                    <td className="py-6 px-6 text-center font-semibold text-primary">{row.fitcoach}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`card ${row.highlight ? 'border-primary/30' : ''}`}
              >
                <h3 className="font-bold text-lg mb-4">{row.label}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-white/40 mb-2">Coach Personnel</p>
                    <p className="text-white/60">{row.traditional}</p>
                  </div>
                  <div>
                    <p className="text-xs text-primary/60 mb-2">Fit Coach</p>
                    <p className="font-semibold text-primary">{row.fitcoach}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid sm:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <p className="text-sm text-white/60">Moins cher qu'un coach</p>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-white/60">Disponibilité totale</p>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-white/60">Personnalisé</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

