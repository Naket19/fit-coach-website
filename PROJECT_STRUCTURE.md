# 📂 Structure du Projet - Fit Coach

## Vue d'ensemble

```
SiteFitcoach/
├── 📁 app/                      # App Router de Next.js
│   ├── 📁 legal/               # Pages légales
│   │   ├── 📁 terms/           # Conditions d'utilisation
│   │   ├── 📁 privacy/         # Politique de confidentialité
│   │   └── 📁 mentions/        # Mentions légales
│   ├── globals.css             # Styles globaux + Tailwind
│   ├── layout.tsx              # Layout principal + SEO
│   └── page.tsx                # Page d'accueil
│
├── 📁 components/              # Composants React
│   ├── Header.tsx              # Navigation + Menu mobile
│   ├── Hero.tsx                # Section hero avec CTA
│   ├── Features.tsx            # Grille de fonctionnalités
│   ├── HowItWorks.tsx          # Timeline des étapes
│   ├── Comparison.tsx          # Tableau comparatif
│   ├── Testimonials.tsx        # Carousel de témoignages
│   ├── Pricing.tsx             # Carte de tarification
│   ├── FAQ.tsx                 # Accordion FAQ
│   ├── FinalCTA.tsx            # CTA final + badges
│   └── Footer.tsx              # Footer avec liens
│
├── 📁 public/                  # Assets statiques
│   ├── 📁 images/             # Images, logos, screenshots
│   ├── robots.txt             # Configuration robots
│   └── favicon.ico            # Favicon (à ajouter)
│
├── 📁 node_modules/           # Dépendances (généré)
├── 📁 .next/                  # Build Next.js (généré)
│
├── 📄 tailwind.config.ts      # Configuration Tailwind
├── 📄 postcss.config.js       # Configuration PostCSS
├── 📄 tsconfig.json           # Configuration TypeScript
├── 📄 next.config.js          # Configuration Next.js
├── 📄 package.json            # Dépendances et scripts
├── 📄 .eslintrc.json          # Configuration ESLint
├── 📄 .gitignore              # Fichiers ignorés par Git
│
├── 📄 README.md               # Documentation principale
├── 📄 DEPLOYMENT.md           # Guide de déploiement
├── 📄 CUSTOMIZATION.md        # Guide de personnalisation
├── 📄 PROJECT_STRUCTURE.md    # Ce fichier
└── 📄 vercel.json             # Configuration Vercel
```

## 📁 Dossiers Détaillés

### `/app` - Application Next.js

Structure utilisant le **App Router** (Next.js 13+) :

```
app/
├── layout.tsx              # Layout racine, contient :
│                          #   - Meta tags SEO
│                          #   - Open Graph
│                          #   - Fonts (Inter)
│                          #   - Structure HTML de base
│
├── page.tsx               # Page d'accueil, assemble :
│                          #   - Header (navigation)
│                          #   - Hero (bannière)
│                          #   - Features (fonctionnalités)
│                          #   - HowItWorks (étapes)
│                          #   - Comparison (vs coach)
│                          #   - Testimonials (témoignages)
│                          #   - Pricing (tarifs)
│                          #   - FAQ
│                          #   - FinalCTA (téléchargement)
│                          #   - Footer
│
├── globals.css            # Styles globaux :
│                          #   - @tailwind directives
│                          #   - Variables CSS
│                          #   - Classes personnalisées (.btn-primary, .card, etc.)
│                          #   - Reset & base styles
│
└── legal/                 # Pages légales
    ├── terms/page.tsx     # CGU
    ├── privacy/page.tsx   # Confidentialité
    └── mentions/page.tsx  # Mentions légales
```

### `/components` - Composants React

Tous les composants utilisent :
- **TypeScript** pour le typage
- **Framer Motion** pour les animations
- **Tailwind CSS** pour le styling

```
components/
│
├── Header.tsx
│   ├── Navigation desktop
│   ├── Menu hamburger mobile
│   ├── Smooth scroll vers sections
│   ├── Sticky header avec backdrop blur
│   └── Logo + CTA téléchargement
│
├── Hero.tsx
│   ├── Titre principal H1 + gradient
│   ├── Sous-titre + description
│   ├── 2 CTA (télécharger + découvrir)
│   ├── Badges de confiance (3 jours gratuit, etc.)
│   ├── Mockup de téléphone avec app
│   ├── Floating stats cards
│   ├── Background avec orbes animés
│   └── Scroll indicator
│
├── Features.tsx
│   ├── Grille 2x2 de fonctionnalités
│   ├── Icônes + titres + descriptions
│   ├── Animation au scroll (fade-in)
│   ├── Hover effects sur les cards
│   └── CTA en bas de section
│
├── HowItWorks.tsx
│   ├── 4 étapes numérotées
│   ├── Timeline connectée (desktop)
│   ├── Icônes + badges de durée
│   ├── Animation stagger au scroll
│   └── CTA "Prêt à commencer"
│
├── Comparison.tsx
│   ├── Tableau comparatif (desktop)
│   ├── Cards empilées (mobile)
│   ├── Coach traditionnel vs Fit Coach
│   ├── 5 critères comparés
│   └── 3 stats en bas (90% moins cher, etc.)
│
├── Testimonials.tsx
│   ├── 3 témoignages en grille
│   ├── 5 étoiles + citation
│   ├── Avatar + nom + résultat
│   ├── Animation au scroll
│   └── Trust indicators (10k+ users, 4.8/5, 95%)
│
├── Pricing.tsx
│   ├── Carte de tarification unique
│   ├── Badge "Le plus populaire"
│   ├── Prix 12,99€/mois + comparaison coach
│   ├── Info essai gratuit 3 jours
│   ├── Liste de 10 fonctionnalités
│   ├── CTA principal téléchargement
│   └── 3 badges de confiance en bas
│
├── FAQ.tsx
│   ├── 8 questions/réponses
│   ├── Accordion animé (Framer Motion)
│   ├── Click pour expand/collapse
│   └── CTA contact en bas
│
├── FinalCTA.tsx
│   ├── Section avec fond gradient
│   ├── Titre "Prêt à transformer ton corps"
│   ├── 3 stats (10k+, 4.8/5, 95%)
│   ├── Badge App Store
│   ├── Mention Android bientôt
│   └── Trust badges (3 jours gratuit, etc.)
│
└── Footer.tsx
    ├── 4 colonnes (Brand, Produit, Légal, Support)
    ├── Logo + description
    ├── Liens sociaux (Instagram, Twitter, TikTok, YouTube)
    ├── Liens de navigation
    ├── Badge App Store mini
    └── Copyright + love message
```

## 🎨 Styles et Design System

### Couleurs (`tailwind.config.ts`)

```typescript
primary: {
  DEFAULT: '#FF0000',  // Rouge énergique
  dark: '#CC0000',     // Rouge foncé (hover)
  light: '#FF3333',    // Rouge clair (gradients)
}

dark: {
  DEFAULT: '#0A0A0A',  // Noir profond (fond principal)
  light: '#1A1A1A',    // Noir clair (cards)
  lighter: '#2A2A2A',  // Gris foncé (borders)
}
```

### Classes Personnalisées (`globals.css`)

```css
.container-custom     # Container max-w-7xl avec padding responsive
.btn-primary          # Bouton rouge avec hover scale + shadow
.btn-secondary        # Bouton transparent avec backdrop blur
.section-padding      # Padding vertical responsive (py-16 → py-24)
.gradient-text        # Texte avec gradient primary → white
.card                 # Card avec border, hover effect, rounded-2xl
```

### Animations

```typescript
'fade-in'        # Opacity 0 → 1
'slide-up'       # TranslateY(20px) → 0
'slide-down'     # TranslateY(-20px) → 0
'pulse-slow'     # Pulse animation sur 3s
```

## 🔧 Configuration

### `tailwind.config.ts`
- Couleurs custom (primary, dark)
- Fonts (Inter via variable CSS)
- Animations custom
- Breakpoints (sm, md, lg, xl, 2xl)

### `next.config.js`
- Configuration images (domains)
- Optimisations de build

### `tsconfig.json`
- Target ES2017
- Strict mode activé
- Path alias `@/*` → `./*`

### `package.json`
```json
{
  "scripts": {
    "dev": "next dev",        // Dev server sur :3000
    "build": "next build",    // Build production
    "start": "next start",    // Start production
    "lint": "next lint"       // ESLint check
  }
}
```

## 📦 Dépendances Principales

### Production
- **next** (16.0.3) - Framework React
- **react** (19.2.0) - Bibliothèque UI
- **react-dom** (19.2.0) - React pour le DOM
- **framer-motion** (12.23.24) - Animations

### Développement
- **typescript** (5.9.3) - Typage statique
- **tailwindcss** (3.4.0) - CSS utility-first
- **autoprefixer** (10.4.22) - Préfixes CSS
- **eslint** - Linting
- **@types/*** - Types TypeScript

## 🚀 Flux de Développement

### 1. Développement Local
```bash
npm run dev
# → http://localhost:3000
# → Hot reload activé
# → TypeScript check en temps réel
```

### 2. Build Production
```bash
npm run build
# → Compile TypeScript
# → Optimize React components
# → Generate static HTML
# → Bundle CSS/JS
# → Output dans .next/
```

### 3. Déploiement
```bash
# Via Vercel (recommandé)
vercel --prod

# Ou push sur main → auto-deploy
git push origin main
```

## 📊 Performance

### Optimisations Implémentées

1. **Images** : Utilisation du composant Next.js `<Image>`
2. **Fonts** : Font optimization automatique (Inter)
3. **CSS** : Purge automatique avec Tailwind
4. **JavaScript** : Code splitting automatique
5. **Lazy Loading** : Animations au scroll (Framer Motion)
6. **Static Generation** : Page statique (SSG)

### Scores Lighthouse Attendus

- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## 🔐 Sécurité

### Bonnes Pratiques Implémentées

- Pas de secrets dans le code (use env vars)
- HTTPS obligatoire (Vercel)
- Headers de sécurité (Next.js defaults)
- Validation des inputs (TypeScript)
- RGPD compliant (pages légales)

## 📱 Responsive Design

### Breakpoints

```
< 640px   (mobile)     - Stack vertical, menu hamburger
640-768px (sm)         - Tablette portrait
768-1024px (md)        - Tablette landscape
1024-1280px (lg)       - Desktop
> 1280px (xl/2xl)      - Large desktop
```

### Approche Mobile-First

Tous les styles sont d'abord définis pour mobile, puis adaptés :

```typescript
className="text-base sm:text-lg md:text-xl lg:text-2xl"
//         ↑ mobile  ↑ tablet   ↑ desktop  ↑ large
```

## 🧪 Testing

### À Implémenter (Optionnel)

```bash
# Tests unitaires
npm install -D @testing-library/react jest

# Tests E2E
npm install -D @playwright/test

# Visual regression
npm install -D @chromatic-com/storybook
```

## 📈 Analytics (À Configurer)

### Options Recommandées

1. **Vercel Analytics** (inclus gratuit)
2. **Google Analytics** (ajout manuel)
3. **Plausible** (privacy-friendly)

## 🎯 Prochaines Étapes

### Après Installation Initiale

1. ✅ Ajouter vos vraies images/logo
2. ✅ Remplacer les placeholders de contenu
3. ✅ Configurer l'URL App Store
4. ✅ Ajouter favicon et app icons
5. ✅ Configurer les variables d'environnement
6. ✅ Tester sur mobile réel
7. ✅ Optimiser les images
8. ✅ Configurer analytics
9. ✅ Déployer sur Vercel
10. ✅ Configurer domaine custom

### Fonctionnalités Futures (Optionnelles)

- [ ] Blog avec MDX
- [ ] Newsletter avec Mailchimp/ConvertKit
- [ ] i18n (multi-langues)
- [ ] Dark mode toggle (déjà dark par défaut)
- [ ] Accessibilité avancée (skip links, etc.)
- [ ] A/B testing
- [ ] Heatmaps (Hotjar)

---

**Structure créée avec ❤️ pour Fit Coach**

