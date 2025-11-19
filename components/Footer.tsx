'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-lighter border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-10 h-10 relative group-hover:scale-110 transition-transform">
                <img
                  src="/images/logo.png"
                  alt="Fit Coach Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Fit Coach</span>
            </Link>
            <p className="text-white/60 mb-6 text-sm">
              Ton coach personnel IA. Des programmes sur-mesure pour transformer ton corps.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Produit</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Fonctionnalités
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Tarifs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Télécharger
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/legal/terms"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/mentions"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@fitcoach.app"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@fitcoach.app"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Centre d'aide
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@fitcoach.app"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Support
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* App Store Badge */}
            <div className="mt-6">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg px-4 py-2 border border-white/10">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/40">Télécharger sur</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Fit Coach. Tous droits réservés.
          </p>
          <p className="text-white/40 text-sm">
            Made with ❤️ for fitness enthusiasts
          </p>
        </div>
      </div>
    </footer>
  )
}

