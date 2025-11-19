import Link from 'next/link'

export const metadata = {
  title: 'Mentions légales - Fit Coach',
  description: 'Mentions légales de l\'application Fit Coach',
}

export default function MentionsPage() {
  return (
    <main className="min-h-screen bg-dark">
      <div className="container-custom py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Mentions légales</h1>

        <div className="prose prose-invert prose-primary max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
            <p className="text-white/70 mb-4">
              <strong className="text-white">Fit Coach</strong>
              <br />
              Édité par : Ketfi Nayel
              <br />
              Statut : Particulier
              <br />
              Adresse : 56 rue Santos Dumont, France
              <br />
              Email : <a href="mailto:nayelketfi.liad@gmail.com" className="text-primary hover:text-primary-light">nayelketfi.liad@gmail.com</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Directeur de publication</h2>
            <p className="text-white/70 mb-4">
              <strong className="text-white">Ketfi Nayel</strong>
              <br />
              Email : <a href="mailto:nayelketfi.liad@gmail.com" className="text-primary hover:text-primary-light">nayelketfi.liad@gmail.com</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Hébergement</h2>
            <p className="text-white/70 mb-4">
              Ce site est hébergé par :
              <br />
              <strong className="text-white">Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
              <br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">vercel.com</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Propriété intellectuelle</h2>
            <p className="text-white/70 mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de Fit Coach
              et est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Données personnelles</h2>
            <p className="text-white/70 mb-4">
              Pour en savoir plus sur la collecte et le traitement de vos données personnelles,
              consultez notre{' '}
              <Link href="/legal/privacy" className="text-primary hover:text-primary-light">
                Politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-white/70 mb-4">
              Ce site utilise des cookies essentiels pour son fonctionnement.
              Aucun cookie de tracking publicitaire n'est utilisé.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Crédits</h2>
            <p className="text-white/70 mb-4">
              Site développé avec Next.js, React et Tailwind CSS.
              <br />
              Animations : Framer Motion
              <br />
              Hébergement : Vercel
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
            <p className="text-white/70 mb-4">
              Pour toute question ou réclamation :
              <br />
              Email : <a href="mailto:nayelketfi.liad@gmail.com" className="text-primary hover:text-primary-light">nayelketfi.liad@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

