'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const testimonials = [
  {
    name: "Marie",
    age: "28 ans",
    image: "M",
    role: "Perte de poids",
    content: "J'ai toujours voulu un coach personnel mais je n'en avais pas les moyens. Fit Coach m'a donné exactement ce dont j'avais besoin : des programmes adaptés à mon niveau et un suivi constant. J'ai perdu 8kg en 3 mois !",
    result: "-8kg en 3 mois",
    rating: 5,
  },
  {
    name: "Thomas",
    age: "35 ans",
    image: "T",
    role: "Prise de masse",
    content: "Les programmes sont vraiment personnalisés, pas comme les apps génériques. Le coach IA répond à toutes mes questions et le timer automatique est super pratique pendant les séances.",
    result: "+5kg de muscle",
    rating: 5,
  },
  {
    name: "Sarah",
    age: "42 ans",
    image: "S",
    role: "Remise en forme",
    content: "Le coach IA répond à toutes mes questions instantanément. C'est comme avoir un expert dans ma poche. Les séances sont bien structurées et je vois ma progression chaque semaine.",
    result: "Forme retrouvée",
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="card h-full flex flex-col"
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-white/80 mb-6 flex-grow italic">
        "{testimonial.content}"
      </p>

      {/* Result Badge */}
      <div className="mb-6 inline-block">
        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
          ✨ {testimonial.result}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.image}
        </div>
        <div>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-white/60">{testimonial.age} • {testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Témoignages
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ils ont transformé
            <br />
            <span className="gradient-text">leur corps</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Rejoins des milliers d'utilisateurs qui ont déjà atteint leurs objectifs avec Fit Coach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <p className="text-white/60">Utilisateurs actifs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
            <p className="text-white/60">Note moyenne</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-white/60">Recommandent Fit Coach</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

