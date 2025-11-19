# 🚀 Guide de Déploiement - Fit Coach

## Déploiement sur Vercel (Recommandé)

Vercel est la plateforme recommandée pour déployer des applications Next.js.

### Méthode 1 : Via l'interface Vercel

1. **Créer un compte Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub, GitLab ou Bitbucket

2. **Importer le projet**
   - Cliquer sur "Add New Project"
   - Sélectionner votre repository GitHub
   - Vercel détectera automatiquement qu'il s'agit d'un projet Next.js

3. **Configurer les variables d'environnement** (optionnel)
   ```
   NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
   NEXT_PUBLIC_CONTACT_EMAIL=contact@fitcoach.app
   NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
   ```

4. **Déployer**
   - Cliquer sur "Deploy"
   - Vercel va build et déployer automatiquement
   - Votre site sera accessible sur `[nom-projet].vercel.app`

### Méthode 2 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration du domaine personnalisé

1. Aller dans les settings du projet sur Vercel
2. Section "Domains"
3. Ajouter votre domaine (ex: fitcoach.app)
4. Suivre les instructions DNS fournies

## Déploiement sur Netlify

### Via l'interface Netlify

1. **Créer un compte Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Se connecter avec GitHub

2. **Importer le projet**
   - "Add new site" → "Import an existing project"
   - Sélectionner votre repository

3. **Configuration du build**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Variables d'environnement** (optionnel)
   - Aller dans Site settings → Environment variables
   - Ajouter les mêmes variables que pour Vercel

5. **Déployer**
   - Netlify va build et déployer automatiquement

## Déploiement sur d'autres plateformes

### Railway

1. Créer un compte sur [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Sélectionner votre repository
4. Railway détectera automatiquement Next.js
5. Déployer

### Render

1. Créer un compte sur [render.com](https://render.com)
2. "New +" → "Web Service"
3. Connecter votre repository
4. Configuration :
   ```
   Build Command: npm run build && npm start
   Start Command: npm start
   ```

### AWS Amplify

1. Créer un compte AWS
2. Aller sur AWS Amplify
3. "New app" → "Host web app"
4. Connecter votre repository GitHub
5. Suivre les instructions

## Variables d'environnement

Créer un fichier `.env.local` pour le développement local :

```env
# URL de l'App Store
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/fit-coach/idXXXXXXXXX

# Email de contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@fitcoach.app

# Google Analytics (optionnel)
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX

# Plausible Analytics (alternative)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=fitcoach.app
```

⚠️ **Important** : Ne jamais committer le fichier `.env.local` !

## Optimisations avant déploiement

### 1. Optimiser les images

Placer toutes les images dans `/public/images/` et les compresser :

```bash
# Utiliser un outil comme imageoptim ou squoosh
# Ou via CLI :
npm install -g imagemin-cli
imagemin public/images/* --out-dir=public/images/optimized
```

### 2. Vérifier le build

```bash
npm run build
npm start
```

### 3. Tester les performances

Utiliser Lighthouse dans Chrome DevTools :
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### 4. Configurer le domaine

Ajouter un fichier `public/CNAME` avec votre domaine :
```
fitcoach.app
```

## DNS Configuration

Pour un domaine personnalisé, configurer les enregistrements DNS :

### Pour Vercel

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Pour Netlify

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [votre-site].netlify.app
```

## SSL/HTTPS

- Vercel et Netlify fournissent automatiquement un certificat SSL gratuit
- Le HTTPS sera activé automatiquement

## Déploiement continu (CI/CD)

Les plateformes comme Vercel et Netlify déploient automatiquement à chaque push sur la branche `main` :

1. **Développement** : Push sur `dev` → Deploy sur environnement de preview
2. **Production** : Merge sur `main` → Deploy automatique en production

## Rollback

### Sur Vercel
- Aller dans "Deployments"
- Trouver un déploiement précédent
- Cliquer sur "Promote to Production"

### Sur Netlify
- Aller dans "Deploys"
- Sélectionner un déploiement précédent
- Cliquer sur "Publish deploy"

## Monitoring

### Vercel Analytics (inclus)
- Analytics de performance automatiquement activé
- Voir les stats dans le dashboard Vercel

### Google Analytics (optionnel)

Ajouter dans `app/layout.tsx` :

```tsx
import Script from 'next/script'

// Dans le component
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

## Checklist avant déploiement

- [ ] Build réussi localement (`npm run build`)
- [ ] Toutes les images sont optimisées
- [ ] Variables d'environnement configurées
- [ ] Meta tags et Open Graph configurés
- [ ] Favicon et app icons ajoutés
- [ ] robots.txt et sitemap.xml créés
- [ ] Analytics configuré (optionnel)
- [ ] Domaine personnalisé configuré
- [ ] SSL activé
- [ ] Tests de performance effectués (Lighthouse)

## Support

En cas de problème :
- Documentation Vercel : https://vercel.com/docs
- Documentation Next.js : https://nextjs.org/docs
- Support : support@fitcoach.app

---

**Fait avec ❤️ pour Fit Coach**

