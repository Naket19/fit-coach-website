# 🎨 Guide de Personnalisation - Fit Coach

Ce guide vous aide à personnaliser facilement le site web de Fit Coach selon vos besoins.

## 🎨 Couleurs

### Modifier la palette de couleurs

Éditez le fichier `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    DEFAULT: '#FF0000',  // Couleur principale
    dark: '#CC0000',      // Variante foncée
    light: '#FF3333',     // Variante claire
  },
  dark: {
    DEFAULT: '#0A0A0A',   // Fond principal
    light: '#1A1A1A',     // Fond secondaire
    lighter: '#2A2A2A',   // Fond tertiaire
  },
},
```

### Appliquer les nouvelles couleurs

Après modification, les couleurs seront automatiquement appliquées partout où elles sont utilisées :
- `bg-primary` → Fond rouge
- `text-primary` → Texte rouge
- `border-primary` → Bordure rouge
- Etc.

## 📝 Contenu

### Hero Section

Fichier : `components/Hero.tsx`

```typescript
// Titre principal (ligne ~44)
<h1 className="...">
  Ton corps.
  <br />
  Ton coach.
  <br />
  <span className="gradient-text">Ta transformation.</span>
</h1>

// Sous-titre (ligne ~52)
<p className="...">
  Un coach personnel intelligent...
</p>
```

### Fonctionnalités

Fichier : `components/Features.tsx`

```typescript
// Tableau des fonctionnalités (ligne ~9)
const features = [
  {
    icon: <svg>...</svg>,
    title: "Ton coach IA disponible 24/7",
    description: "Pose toutes tes questions...",
    stats: "Réponses en < 2 sec",
  },
  // Ajouter ou modifier ici
]
```

### Témoignages

Fichier : `components/Testimonials.tsx`

```typescript
// Tableau des témoignages (ligne ~9)
const testimonials = [
  {
    name: "Marie",
    age: "28 ans",
    image: "M",  // Initiale
    role: "Perte de poids",
    content: "J'ai toujours voulu...",
    result: "-8kg en 3 mois",
    rating: 5,
  },
  // Ajouter ou modifier ici
]
```

### FAQ

Fichier : `components/FAQ.tsx`

```typescript
// Tableau des questions (ligne ~9)
const faqs = [
  {
    question: "Ai-je besoin d'équipement spécifique ?",
    answer: "Non ! L'app s'adapte...",
  },
  // Ajouter ou modifier ici
]
```

### Tarification

Fichier : `components/Pricing.tsx`

```typescript
// Prix (ligne ~60)
<span className="text-6xl font-bold text-primary">12,99€</span>

// Fonctionnalités incluses (ligne ~28)
const features = [
  "Coach IA personnel illimité",
  "Programmes d'entraînement personnalisés",
  // Modifier ici
]
```

## 🖼️ Images et Logo

### Ajouter votre logo

1. Placez votre logo dans `/public/images/logo.png`
2. Modifiez le composant Header (`components/Header.tsx`) :

```typescript
// Remplacer le logo texte par une image
<Image
  src="/images/logo.png"
  alt="Fit Coach"
  width={40}
  height={40}
  className="rounded-lg"
/>
```

### Ajouter des screenshots de l'app

1. Placez vos screenshots dans `/public/images/`
   - `app-home.png`
   - `app-workout.png`
   - `app-stats.png`
   - etc.

2. Remplacez le placeholder dans `components/Hero.tsx` :

```typescript
// Ligne ~108, remplacer le contenu du div par :
<Image
  src="/images/app-home.png"
  alt="Screenshot de l'app"
  fill
  className="object-cover"
/>
```

### Image Open Graph (réseaux sociaux)

Créez une image 1200x630px et placez-la dans `/public/images/og-image.jpg`

Le fichier `app/layout.tsx` l'utilisera automatiquement.

## 🔗 Liens

### Lien App Store

Modifiez les liens App Store dans tous les fichiers :

```bash
# Rechercher et remplacer
"https://apps.apple.com" → "https://apps.apple.com/app/fit-coach/idXXXXXXXX"
```

Fichiers concernés :
- `components/Hero.tsx`
- `components/FinalCTA.tsx`
- `components/Footer.tsx`

### Emails de contact

Rechercher et remplacer les emails dans tout le projet :
- `contact@fitcoach.app` → Votre email
- `support@fitcoach.app` → Votre email support
- `privacy@fitcoach.app` → Votre email privacy

## 🌐 SEO

### Meta tags

Fichier : `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Votre titre SEO',
  description: 'Votre description SEO',
  keywords: 'vos, mots-clés, ici',
  // ...
}
```

### URL de base

Si vous avez un domaine personnalisé, modifiez :

```typescript
// app/layout.tsx (ligne ~19)
metadataBase: new URL('https://votredomaine.com'),
```

## 🎭 Animations

### Désactiver les animations

Pour désactiver toutes les animations (ex: préférence utilisateur) :

```typescript
// Dans n'importe quel composant avec motion
<motion.div
  initial={false}  // Désactive l'animation initiale
  animate={false}  // Désactive l'animation
>
```

### Modifier la durée des animations

```typescript
// Dans tailwind.config.ts
animation: {
  'pulse-slow': 'pulse 3s ...',  // Changer 3s en 5s pour plus lent
}
```

## 📱 Responsive

### Breakpoints Tailwind

```typescript
// Par défaut
sm: '640px'   // Tablettes
md: '768px'   // Tablettes larges
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

### Modifier un breakpoint

Dans `tailwind.config.ts` :

```typescript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}
```

## 🔤 Typographie

### Changer la police

1. Modifier dans `app/layout.tsx` :

```typescript
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})
```

2. Modifier dans `tailwind.config.ts` :

```typescript
fontFamily: {
  sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
}
```

## 🎯 Statistiques

### Modifier les chiffres de stats

Fichier : `components/FinalCTA.tsx` (ligne ~40)

```typescript
<div className="text-4xl font-bold text-primary mb-2">10k+</div>
<p>Utilisateurs actifs</p>
```

Fichiers concernés :
- `components/FinalCTA.tsx`
- `components/Testimonials.tsx`
- `components/Comparison.tsx`

## 🌍 Internationalisation

Pour ajouter d'autres langues :

1. Installer i18n :
```bash
npm install next-intl
```

2. Créer les fichiers de traduction :
```
/messages
  /fr.json
  /en.json
```

3. Suivre la documentation Next.js i18n

## 🎨 Thème Clair/Sombre

Pour ajouter un mode clair :

1. Activer le dark mode dans `tailwind.config.ts` :

```typescript
darkMode: 'class',
```

2. Créer un toggle dans le Header :

```typescript
const [theme, setTheme] = useState('dark')

<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
  Toggle theme
</button>
```

3. Utiliser les classes conditionnelles :

```html
<div className="bg-white dark:bg-dark">
```

## 🔧 Variables d'environnement

Créer `.env.local` :

```env
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
NEXT_PUBLIC_CONTACT_EMAIL=contact@fitcoach.app
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

Utiliser dans le code :

```typescript
const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL
```

## 🎬 Ajouter une vidéo démo

Dans `components/Hero.tsx` :

```typescript
<video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
>
  <source src="/videos/demo.mp4" type="video/mp4" />
</video>
```

## 📊 Analytics

### Google Analytics

Dans `app/layout.tsx`, ajouter avant le closing `</body>` :

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
  `}
</Script>
```

## 🐛 Debugging

### Voir les erreurs

```bash
npm run dev
# Ouvrir http://localhost:3000
# Ouvrir la console du navigateur (F12)
```

### Rebuild complet

```bash
rm -rf .next
npm run build
```

## 📦 Optimisation

### Optimiser les images

```bash
# Installer sharp (recommandé)
npm install sharp

# Les images seront automatiquement optimisées par Next.js
```

### Analyser le bundle

```bash
npm install @next/bundle-analyzer
```

Dans `next.config.js` :

```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Puis :

```bash
ANALYZE=true npm run build
```

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifier la console du navigateur
2. Vérifier les logs du terminal
3. Consulter la documentation Next.js
4. Contacter le support : support@fitcoach.app

---

**Bon développement ! 🚀**

