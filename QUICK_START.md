# ⚡ Quick Start - Fit Coach

Guide de démarrage rapide pour mettre en ligne votre site en 10 minutes !

## 🚀 Démarrage Immédiat

### 1️⃣ Installation (2 min)

```bash
# Vous êtes déjà dans le bon répertoire !
cd /Users/nayelk/SiteFitcoach

# Les dépendances sont déjà installées ✅
# Si besoin : npm install

# Lancer le serveur de développement
npm run dev
```

🎉 **Votre site est accessible sur http://localhost:3000**

### 2️⃣ Vérifier que Tout Fonctionne (1 min)

Ouvrez http://localhost:3000 et vérifiez :
- ✅ Header avec navigation
- ✅ Hero section avec animation
- ✅ Toutes les sections s'affichent
- ✅ Footer avec liens
- ✅ Menu mobile fonctionne
- ✅ Smooth scroll entre sections

## 📝 Personnalisation Rapide (5 min)

### Modifier le Contenu Principal

#### 1. Titre Hero
```typescript
// components/Hero.tsx - Ligne 44
<h1>
  Ton corps.
  <br />
  Ton coach.
  <br />
  <span className="gradient-text">Ta transformation.</span>
</h1>
```

#### 2. URL App Store
Rechercher et remplacer dans **TOUS** les fichiers :
```
"https://apps.apple.com" → "VOTRE_URL_APP_STORE"
```

Fichiers concernés :
- `components/Hero.tsx`
- `components/FinalCTA.tsx`
- `components/Footer.tsx`

#### 3. Emails de Contact
Rechercher et remplacer :
```
contact@fitcoach.app → votre@email.com
```

## 🎨 Ajouter Vos Assets (3 min)

### Minimum Vital

1. **Logo** : Placez votre logo dans `/public/images/logo.png`
2. **Favicon** : Ajoutez `/public/favicon.ico`
3. **OG Image** : Ajoutez `/public/images/og-image.jpg` (1200x630px)

Voir `ASSETS_NEEDED.md` pour la liste complète.

## 🌐 Déploiement sur Vercel (2 min)

### Méthode Express

1. **Push sur GitHub** (si pas déjà fait)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Fit Coach website"
   git remote add origin VOTRE_REPO_GITHUB
   git push -u origin main
   ```

2. **Importer sur Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer "Add New Project"
   - Importer votre repo GitHub
   - Cliquer "Deploy"

3. **C'est en ligne ! 🎉**
   - URL : `votre-projet.vercel.app`
   - SSL automatique
   - CDN global
   - Déploiement continu activé

## ⚙️ Configuration Optionnelle

### Variables d'Environnement (Sur Vercel)

1. Aller dans "Settings" → "Environment Variables"
2. Ajouter :
   ```
   NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
   NEXT_PUBLIC_CONTACT_EMAIL=contact@votredomaine.com
   ```

### Domaine Personnalisé

1. Dans Vercel : "Settings" → "Domains"
2. Ajouter votre domaine (ex: fitcoach.app)
3. Configurer vos DNS selon les instructions

## 📱 Test Mobile

### Sur Votre Téléphone

1. Trouvez votre IP locale :
   ```bash
   # Mac
   ipconfig getifaddr en0
   
   # Windows
   ipconfig
   ```

2. Sur votre téléphone (même WiFi) :
   ```
   http://VOTRE_IP:3000
   ```

3. Testez :
   - Menu mobile
   - Scroll fluide
   - Animations
   - Tous les liens

## ✅ Checklist Avant Lancement

### Contenu
- [ ] Tous les textes sont à jour
- [ ] Emails de contact corrects
- [ ] URL App Store configurée
- [ ] Témoignages personnalisés

### Assets
- [ ] Logo ajouté
- [ ] Favicon ajouté
- [ ] OG image ajoutée (1200x630px)
- [ ] Screenshots de l'app ajoutés

### Technique
- [ ] `npm run build` passe sans erreur
- [ ] Site testé sur mobile
- [ ] Toutes les pages légales revues
- [ ] Analytics configuré (optionnel)

### SEO
- [ ] Meta title/description vérifiés
- [ ] OG tags testés (Facebook Debugger)
- [ ] Sitemap généré (automatique avec Next.js)
- [ ] robots.txt présent ✅

## 🔥 Commandes Essentielles

```bash
# Développement
npm run dev              # Démarre le serveur local

# Production
npm run build            # Build pour production
npm start                # Démarre le serveur production

# Nettoyage
rm -rf .next             # Supprime le build
rm -rf node_modules      # Supprime les dépendances
npm install              # Réinstalle tout

# Git
git status               # Voir les modifications
git add .                # Ajouter tous les fichiers
git commit -m "message"  # Commit avec message
git push                 # Push vers GitHub
```

## 🆘 Problèmes Courants

### Le site ne démarre pas
```bash
# Solution 1 : Réinstaller les dépendances
rm -rf node_modules .next
npm install
npm run dev

# Solution 2 : Vérifier le port
# Si port 3000 occupé, Next.js utilisera 3001
```

### Erreur de build
```bash
# Vérifier les erreurs TypeScript
npm run build

# Lire les erreurs et corriger
# Généralement : import manquant ou typo
```

### Images ne s'affichent pas
```bash
# Vérifier que les images sont dans /public
# Les chemins doivent commencer par /
# Exemple : /images/logo.png (pas ./images/logo.png)
```

### Animations ne fonctionnent pas
```bash
# Vérifier que framer-motion est installé
npm list framer-motion

# Réinstaller si nécessaire
npm install framer-motion
```

## 📚 Documentation Complète

- **README.md** - Vue d'ensemble du projet
- **DEPLOYMENT.md** - Guide de déploiement détaillé
- **CUSTOMIZATION.md** - Guide de personnalisation
- **PROJECT_STRUCTURE.md** - Structure du projet
- **ASSETS_NEEDED.md** - Liste des assets à ajouter

## 🎯 Prochaines Étapes

Après avoir lancé votre site :

1. **SEO**
   - Soumettre à Google Search Console
   - Créer un sitemap
   - Optimiser les meta descriptions

2. **Analytics**
   - Configurer Google Analytics
   - Ou utiliser Vercel Analytics (inclus)
   - Ou Plausible pour privacy-first

3. **Marketing**
   - Partager sur réseaux sociaux
   - Créer des posts LinkedIn/Twitter
   - Faire de la pub si budget

4. **Amélioration Continue**
   - Analyser les stats de visite
   - A/B tester les CTA
   - Recueillir feedback utilisateurs
   - Itérer sur le design

## 💡 Tips & Astuces

### Performance
- Toujours optimiser les images avant upload
- Utiliser WebP quand possible
- Lazy load pour les images en bas de page

### SEO
- Écrire des meta descriptions uniques
- Utiliser des alt texts descriptifs
- Créer du contenu de qualité (blog ?)

### Conversion
- CTA clairs et visibles
- Preuves sociales (témoignages, stats)
- Réduire les frictions (essai gratuit)
- Optimiser pour mobile en priorité

## 🎨 Personnalisation Avancée

### Changer les Couleurs
```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#VOTRE_COULEUR',
    // ...
  }
}
```

### Ajouter une Section
1. Créer `components/MaSection.tsx`
2. Ajouter dans `app/page.tsx`
3. Importer et placer entre deux sections

### Modifier les Animations
```typescript
// Dans n'importe quel composant
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

## 📞 Support

- **Email** : support@fitcoach.app
- **Documentation Next.js** : https://nextjs.org/docs
- **Documentation Tailwind** : https://tailwindcss.com/docs
- **Documentation Framer Motion** : https://framer.com/motion

---

## 🎉 C'est Parti !

Votre site est prêt à être lancé. Bonne chance avec Fit Coach ! 💪

**Fait avec ❤️ et beaucoup de ☕**

