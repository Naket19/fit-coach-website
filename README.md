# 🏋️ Fit Coach - Site Web Officiel

Site web moderne et performant pour l'application mobile Fit Coach, un coach sportif personnel propulsé par l'intelligence artificielle.

## 🚀 Fonctionnalités

- ✅ Design moderne et élégant (dark mode)
- ✅ 100% responsive (mobile-first)
- ✅ Animations fluides avec Framer Motion
- ✅ Performance optimisée avec Next.js 14+
- ✅ SEO optimisé
- ✅ Accessibilité (WCAG AA)
- ✅ TypeScript pour la sécurité du code

## 🎨 Sections du Site

1. **Hero Section** - Titre accrocheur avec CTA principal
2. **Fonctionnalités** - 4 fonctionnalités clés de l'app
3. **Comment ça marche** - 4 étapes simples
4. **Comparaison** - Fit Coach vs Coach traditionnel
5. **Témoignages** - Retours d'utilisateurs
6. **Tarification** - Offre premium avec essai gratuit
7. **FAQ** - Questions fréquentes
8. **CTA Final** - Appel à l'action pour téléchargement
9. **Footer** - Liens légaux et réseaux sociaux

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Démarrer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🎯 Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
NEXT_PUBLIC_CONTACT_EMAIL=contact@fitcoach.app
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

### Customisation

#### Couleurs

Modifiez les couleurs dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    DEFAULT: '#FF0000',
    dark: '#CC0000',
    light: '#FF3333',
  },
  // ...
}
```

#### Contenu

- **Textes** : Modifiez directement dans les composants `/components/*`
- **Images** : Placez vos images dans `/public/images/`
- **Logo** : Remplacez le logo dans le composant `Header.tsx`

## 📱 Screenshots & Assets

Pour un résultat optimal, ajoutez ces assets dans `/public/images/` :

- `og-image.jpg` (1200x630px) - Image pour Open Graph
- `app-screenshot-*.png` - Screenshots de l'app
- `logo.png` - Logo de l'app
- `favicon.ico` - Favicon

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push ton code sur GitHub
2. Importe le projet sur [Vercel](https://vercel.com)
3. Configure les variables d'environnement
4. Deploy !

```bash
# Ou via CLI
npm i -g vercel
vercel
```

### Netlify

1. Build le projet : `npm run build`
2. Deploy le dossier `.next` sur Netlify
3. Configure les variables d'environnement

### Autres plateformes

Le site peut être déployé sur n'importe quelle plateforme supportant Next.js (Render, Railway, AWS, etc.)

## 📊 Performance

Le site est optimisé pour obtenir d'excellents scores Lighthouse :

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

## 🎨 Personnalisation du Design

### Animations

Les animations sont gérées par Framer Motion. Pour modifier :

```typescript
// Dans n'importe quel composant
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenu
</motion.div>
```

### Responsive

Le design utilise une approche mobile-first avec Tailwind :

```html
<div className="text-base sm:text-lg md:text-xl lg:text-2xl">
  <!-- Taille adaptative -->
</div>
```

## 🔧 Scripts

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## 📝 Structure du Projet

```
/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal avec SEO
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── Header.tsx           # Navigation
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Fonctionnalités
│   ├── HowItWorks.tsx       # Comment ça marche
│   ├── Comparison.tsx       # Tableau comparatif
│   ├── Testimonials.tsx     # Témoignages
│   ├── Pricing.tsx          # Tarification
│   ├── FAQ.tsx              # Questions fréquentes
│   ├── FinalCTA.tsx         # CTA final
│   └── Footer.tsx           # Footer
├── public/
│   └── images/              # Assets statiques
├── tailwind.config.ts       # Config Tailwind
├── next.config.js           # Config Next.js
└── package.json
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésite pas à ouvrir une issue ou une pull request.

## 📄 License

© 2025 Fit Coach. Tous droits réservés.

## 📞 Contact

- Email : contact@fitcoach.app
- Support : support@fitcoach.app

---

**Made with ❤️ for fitness enthusiasts**

