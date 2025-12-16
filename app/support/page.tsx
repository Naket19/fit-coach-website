import Link from 'next/link'

export const metadata = {
  title: 'Support & Aide - Fit Coach',
  description: 'Centre d\'aide et support pour Fit Coach. FAQ, guides et assistance.',
}

export default function SupportPage() {
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

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Support & Aide</h1>
        <p className="text-xl text-white/70 mb-12">
          Besoin d'aide avec Fit Coach ? Nous sommes là pour vous accompagner ! Consultez notre FAQ ci-dessous ou contactez-nous directement.
        </p>

        {/* Contact Section */}
        <div className="card bg-primary/10 border-primary/30 mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Nous Contacter
          </h2>
          <p className="text-white/80 mb-2">
            <strong className="text-white">Email :</strong>{' '}
            <a href="mailto:contact@fit-coach.app" className="text-primary hover:text-primary-light underline">
              contact@fit-coach.app
            </a>
          </p>
          <p className="text-white/60 text-sm">
            Nous répondons généralement sous 24-48 heures (jours ouvrés).
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {/* Compte & Connexion */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">🔐</span>
              Compte & Connexion
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-3">Comment créer un compte ?</h3>
                <ol className="list-decimal list-inside space-y-2 text-white/70">
                  <li>Téléchargez l'application Fit Coach sur l'App Store</li>
                  <li>Ouvrez l'app et suivez le processus d'onboarding</li>
                  <li>Créez votre compte avec : Email et mot de passe, Apple Sign-In, ou Google Sign-In</li>
                </ol>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">J'ai oublié mon mot de passe, que faire ?</h3>
                <p className="text-white/70 mb-3">Si vous vous êtes inscrit avec un email et mot de passe :</p>
                <ol className="list-decimal list-inside space-y-2 text-white/70">
                  <li>Sur l'écran de connexion, appuyez sur "Mot de passe oublié ?"</li>
                  <li>Entrez votre adresse email</li>
                  <li>Vous recevrez un lien de réinitialisation par email</li>
                </ol>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Puis-je utiliser mon compte sur plusieurs appareils ?</h3>
                <p className="text-white/70">
                  Oui ! Connectez-vous simplement avec vos identifiants sur chaque appareil. Vos données sont synchronisées automatiquement.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Comment supprimer mon compte ?</h3>
                <ol className="list-decimal list-inside space-y-2 text-white/70 mb-4">
                  <li>Ouvrez l'application</li>
                  <li>Allez dans <strong className="text-white">Paramètres</strong></li>
                  <li>Sélectionnez <strong className="text-white">"Supprimer mon compte"</strong></li>
                  <li>Confirmez la suppression</li>
                </ol>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-semibold">⚠️ Important : Cette action est irréversible. Toutes vos données seront supprimées définitivement dans les 30 jours.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Abonnement & Paiement */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">💳</span>
              Abonnement & Paiement
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-3">Quels sont les tarifs ?</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong className="text-primary">Essai gratuit :</strong> 3 jours (accès complet à toutes les fonctionnalités)</li>
                  <li><strong className="text-primary">Abonnements :</strong> Nous proposons des formules flexibles (mensuelles et annuelles). Consultez l'application pour voir les offres en vigueur dans votre région.</li>
                </ul>
                <p className="text-white/60 text-sm mt-4">Les prix peuvent varier selon votre pays et les promotions en cours.</p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Comment fonctionne l'essai gratuit ?</h3>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Vous bénéficiez de <strong className="text-white">3 jours d'accès gratuit</strong> à toutes les fonctionnalités premium</li>
                  <li>Aucune carte bancaire requise lors de l'inscription</li>
                  <li>Après les 3 jours, votre abonnement démarre automatiquement</li>
                  <li>Vous pouvez annuler à tout moment pendant l'essai sans être débité</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Comment annuler mon abonnement ?</h3>
                <p className="text-white/70 mb-3">Les abonnements sont gérés par Apple. Pour annuler :</p>
                <ol className="list-decimal list-inside space-y-2 text-white/70 mb-4">
                  <li>Ouvrez <strong className="text-white">Réglages</strong> sur votre iPhone/iPad</li>
                  <li>Appuyez sur votre nom en haut</li>
                  <li>Sélectionnez <strong className="text-white">"Abonnements"</strong></li>
                  <li>Choisissez <strong className="text-white">"Fit Coach"</strong></li>
                  <li>Appuyez sur <strong className="text-white">"Annuler l'abonnement"</strong></li>
                </ol>
                <p className="text-white/60 text-sm">Votre accès premium reste actif jusqu'à la fin de la période payée.</p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Puis-je obtenir un remboursement ?</h3>
                <p className="text-white/70 mb-3">Les paiements sont traités par Apple. Pour demander un remboursement :</p>
                <ol className="list-decimal list-inside space-y-2 text-white/70 mb-4">
                  <li>Allez sur <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline">reportaproblem.apple.com</a></li>
                  <li>Connectez-vous avec votre identifiant Apple</li>
                  <li>Sélectionnez "Demander un remboursement"</li>
                  <li>Suivez les instructions</li>
                </ol>
                <p className="text-white/60 text-sm">Les remboursements sont soumis à la politique d'Apple.</p>
              </div>
            </div>
          </section>

          {/* Coach IA & Programmes */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">🤖</span>
              Coach IA & Programmes
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-3">Comment fonctionne le coach IA ?</h3>
                <p className="text-white/70 mb-3">Notre coach IA utilise l'intelligence artificielle (GPT d'OpenAI) pour :</p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Répondre à vos questions sur l'entraînement, la nutrition, la récupération</li>
                  <li>Analyser votre profil (âge, poids, objectifs, niveau)</li>
                  <li>Vous donner des conseils personnalisés en temps réel</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Le coach IA remplace-t-il un vrai coach sportif ?</h3>
                <p className="text-white/70">
                  Non. Le coach IA est un outil d'accompagnement et d'information. Pour des besoins spécifiques (rééducation, compétition, pathologies), consultez un professionnel de santé ou un coach diplômé.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Comment sont générés les programmes d'entraînement ?</h3>
                <p className="text-white/70 mb-3">L'IA analyse vos réponses lors de l'onboarding :</p>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-4">
                  <li>Objectif (perte de poids, prise de masse, tonification)</li>
                  <li>Niveau de forme physique</li>
                  <li>Équipement disponible</li>
                  <li>Jours d'entraînement disponibles</li>
                  <li>Limitations physiques éventuelles</li>
                </ul>
                <p className="text-white/70">Elle génère ensuite un programme hebdomadaire sur-mesure, adapté à VOUS.</p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Puis-je modifier un programme généré par l'IA ?</h3>
                <p className="text-white/70 mb-3">Oui ! Vous pouvez :</p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Créer vos propres séances manuellement</li>
                  <li>Modifier les exercices d'un programme existant</li>
                  <li>Ajuster le nombre de séries, répétitions, poids</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Séances d'Entraînement */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">💪</span>
              Séances d'Entraînement
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-3">Comment démarrer une séance ?</h3>
                <ol className="list-decimal list-inside space-y-2 text-white/70">
                  <li>Allez dans l'onglet <strong className="text-white">"Accueil"</strong> ou <strong className="text-white">"Séances"</strong></li>
                  <li>Sélectionnez un programme ou créez une séance manuelle</li>
                  <li>Appuyez sur <strong className="text-white">"Démarrer la séance"</strong></li>
                  <li>Suivez les instructions à l'écran</li>
                </ol>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Le timer se lance-t-il automatiquement ?</h3>
                <p className="text-white/70">
                  Oui ! Le timer de repos démarre automatiquement après chaque série et entre les exercices d'un circuit.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Puis-je m'entraîner sans connexion internet ?</h3>
                <p className="text-white/70">
                  Oui ! Vos programmes et séances sont accessibles hors-ligne. Vos performances sont enregistrées localement et synchronisées automatiquement dès que vous vous reconnectez.
                </p>
              </div>
            </div>
          </section>

          {/* Technique & Bugs */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">📱</span>
              Technique & Bugs
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-3">L'application est disponible sur Android ?</h3>
                <p className="text-white/70">
                  Fit Coach est actuellement disponible uniquement sur <strong className="text-white">iOS</strong> (iPhone et iPad). La version Android est prévue prochainement.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">L'app plante ou se fige, que faire ?</h3>
                <ol className="list-decimal list-inside space-y-2 text-white/70 mb-4">
                  <li>Fermez complètement l'application (double-clic sur le bouton Home, swipe vers le haut)</li>
                  <li>Redémarrez votre appareil</li>
                  <li>Réinstallez l'application si le problème persiste</li>
                  <li>Contactez-nous à contact@fit-coach.app avec :
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Modèle de votre appareil</li>
                      <li>Version d'iOS</li>
                      <li>Description du problème</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3">Quelle version d'iOS est requise ?</h3>
                <p className="text-white/70">
                  iOS 15.0 ou supérieur.
                </p>
              </div>
            </div>
          </section>

          {/* Conseils */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">💡</span>
              Conseils & Bonnes Pratiques
            </h2>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Comment tirer le meilleur parti de Fit Coach ?</h3>
              <ol className="list-decimal list-inside space-y-3 text-white/70">
                <li><strong className="text-white">Soyez honnête lors de l'onboarding</strong> : Plus vos réponses sont précises, plus les programmes seront adaptés</li>
                <li><strong className="text-white">Utilisez le coach IA</strong> : Posez toutes vos questions, c'est fait pour ça !</li>
                <li><strong className="text-white">Enregistrez vos performances</strong> : Le suivi régulier vous permet de voir votre progression</li>
                <li><strong className="text-white">Soyez régulier</strong> : La constance est la clé du succès</li>
                <li><strong className="text-white">Écoutez votre corps</strong> : Respectez les jours de repos et ajustez l'intensité si nécessaire</li>
              </ol>
            </div>
          </section>
        </div>

        {/* CTA Final */}
        <div className="mt-16 card bg-primary/10 border-primary/30 text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'Aide Supplémentaire ?</h2>
          <p className="text-white/70 mb-6">
            Si vous ne trouvez pas la réponse à votre question, contactez-nous :
          </p>
          <a
            href="mailto:contact@fit-coach.app"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Nous Contacter
          </a>
          <p className="text-white/60 text-sm mt-4">
            Réponse sous 24-48 heures (jours ouvrés)
          </p>
        </div>

        {/* Download CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Pas encore utilisateur ?</h3>
          <p className="text-white/70 mb-6">Téléchargez l'application maintenant !</p>
          <a href="#download" className="btn-primary inline-flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Télécharger sur l'App Store
          </a>
          <div className="flex items-center justify-center gap-6 text-sm text-white/50 mt-6">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Essai gratuit 3 jours
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Aucune carte requise
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

