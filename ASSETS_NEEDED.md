# 📸 Assets à Ajouter - Fit Coach

Ce document liste tous les assets (images, icônes, etc.) que vous devez ajouter pour finaliser le site.

## 🎨 Logo et Branding

### Logo Principal
- **Fichier** : `/public/images/logo.png`
- **Taille** : 200x200px minimum (SVG préféré)
- **Format** : PNG avec transparence ou SVG
- **Usage** : Header, footer, OG image

### Favicon et App Icons
```
/public/
├── favicon.ico              # 32x32px
├── apple-touch-icon.png     # 180x180px
├── favicon-16x16.png        # 16x16px
├── favicon-32x32.png        # 32x32px
└── favicon-192x192.png      # 192x192px (Android)
```

**Outils recommandés** :
- [Favicon Generator](https://realfavicongenerator.net/)
- [Figma](https://figma.com) pour créer le design

## 📱 Screenshots de l'Application

### Screenshots Principaux
À placer dans `/public/images/screenshots/`

1. **app-home.png** (750x1624px - iPhone 14 Pro)
   - Écran d'accueil avec programme de la semaine
   - Usage : Hero section, Features

2. **app-chat.png** (750x1624px)
   - Interface du chat avec le coach IA
   - Usage : Features section

3. **app-workout.png** (750x1624px)
   - Séance d'entraînement en cours avec timer
   - Usage : Features section

4. **app-stats.png** (750x1624px)
   - Écran des statistiques et graphiques
   - Usage : Features section

5. **app-program.png** (750x1624px)
   - Vue du programme personnalisé
   - Usage : How It Works section

### Screenshots Secondaires (Optionnels)
6. **app-exercises.png** - Bibliothèque d'exercices
7. **app-profile.png** - Profil utilisateur
8. **app-history.png** - Historique des séances

**Tips** :
- Utilisez des screenshots réels de votre app
- Nettoyez les données sensibles/personnelles
- Assurez un bon contraste et une bonne lisibilité
- Utilisez un mockup de téléphone si besoin

## 🌐 Open Graph Image (Réseaux Sociaux)

### OG Image
- **Fichier** : `/public/images/og-image.jpg`
- **Taille** : 1200x630px (exactement)
- **Format** : JPG ou PNG
- **Contenu suggéré** :
  - Logo Fit Coach
  - Titre : "Ton Coach Personnel IA"
  - Screenshot de l'app
  - Couleurs de la marque (rouge/noir)

**Outils de création** :
- [Canva](https://canva.com) - Template OG Image
- [Figma](https://figma.com) - Design custom
- [Bannerbear](https://bannerbear.com) - Générateur automatique

**Test** :
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://linkedin.com/post-inspector/)

## 🖼️ Images Illustratives (Optionnelles)

### Background Images
```
/public/images/backgrounds/
├── hero-bg.jpg          # Fond de la hero section (alternative)
├── cta-bg.jpg           # Fond de la CTA finale
└── pattern.svg          # Pattern décoratif
```

### Icônes Personnalisées
Si vous voulez remplacer les icônes SVG actuelles :
```
/public/images/icons/
├── ai.svg               # Icône coach IA
├── program.svg          # Icône programme
├── timer.svg            # Icône timer
├── stats.svg            # Icône statistiques
└── trophy.svg           # Icône succès
```

## 🎥 Média Vidéo (Optionnel)

### Vidéo de Démo
- **Fichier** : `/public/videos/demo.mp4`
- **Durée** : 15-30 secondes
- **Taille** : Max 10MB (compression recommandée)
- **Format** : MP4 (H.264)
- **Résolution** : 1080p ou 720p
- **Contenu** : Parcours rapide de l'app

**Outils de compression** :
- [HandBrake](https://handbrake.fr/)
- [FFmpeg](https://ffmpeg.org/)
- [Cloudinary](https://cloudinary.com/)

## 👥 Photos de Témoignages (Optionnel)

Actuellement, les témoignages utilisent des initiales.
Si vous voulez ajouter des photos réelles :

```
/public/images/testimonials/
├── marie.jpg            # Photo de Marie (300x300px)
├── thomas.jpg           # Photo de Thomas (300x300px)
└── sarah.jpg            # Photo de Sarah (300x300px)
```

**Important** : Assurez-vous d'avoir les droits/autorisations pour utiliser ces photos.

## 📊 Graphiques et Illustrations (Optionnel)

### Graphiques de Stats
```
/public/images/charts/
├── progression.png      # Graphique de progression
├── volume.png           # Volume soulevé
└── consistency.png      # Régularité d'entraînement
```

## 🎨 Comment Créer Ces Assets ?

### Design du Logo
1. Utilisez **Figma** ou **Adobe Illustrator**
2. Respectez la charte graphique (rouge #FF0000, noir #0A0A0A)
3. Exportez en SVG pour la meilleure qualité
4. Créez aussi des versions PNG pour compatibilité

### Screenshots d'App
1. Ouvrez votre app sur iPhone (ou simulateur)
2. Prenez des screenshots (Cmd+S sur simulateur)
3. Optionnel : Utilisez un mockup avec [Mockuphone](https://mockuphone.com/)
4. Optimisez avec [TinyPNG](https://tinypng.com/)

### OG Image
**Méthode 1 : Canva**
1. Créez un compte sur [Canva](https://canva.com)
2. Cherchez "Facebook Post" ou "Open Graph"
3. Utilisez les dimensions 1200x630px
4. Ajoutez votre logo, texte, screenshot
5. Téléchargez en JPG

**Méthode 2 : Figma**
1. Créez un frame 1200x630px
2. Ajoutez votre design
3. Exportez en JPG/PNG

**Méthode 3 : Code (Next.js OG)**
```typescript
// Générer dynamiquement avec @vercel/og
import { ImageResponse } from '@vercel/og'

export async function GET() {
  return new ImageResponse(
    (
      <div style={{ /* votre design */ }}>
        Fit Coach
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
```

## 🔧 Optimisation des Images

### Avant d'Ajouter les Images

**Compression** :
- [TinyPNG](https://tinypng.com/) - PNG/JPG
- [Squoosh](https://squoosh.app/) - Tous formats
- [ImageOptim](https://imageoptim.com/) - Mac app

**Conversion** :
- Convertir en WebP pour meilleure compression
- Next.js le fait automatiquement avec le composant `<Image>`

**Outils CLI** :
```bash
# Installer imagemin
npm install -g imagemin-cli

# Optimiser toutes les images
imagemin public/images/*.png --out-dir=public/images/optimized
```

## 📝 Checklist des Assets

### Obligatoires ✅
- [ ] Logo principal (`logo.png` ou `logo.svg`)
- [ ] Favicon (`favicon.ico`)
- [ ] Open Graph image (`og-image.jpg`)
- [ ] Au moins 1 screenshot de l'app

### Recommandés 🌟
- [ ] Apple touch icon (`apple-touch-icon.png`)
- [ ] 4 screenshots principaux de l'app
- [ ] Favicon en différentes tailles

### Optionnels ⭐
- [ ] Vidéo de démo (`demo.mp4`)
- [ ] Photos de témoignages
- [ ] Icônes personnalisées
- [ ] Images de background

## 🚀 Une Fois les Assets Ajoutés

1. **Vérifier l'intégration** :
   ```bash
   npm run dev
   # Ouvrir http://localhost:3000
   # Vérifier que les images s'affichent
   ```

2. **Optimiser** :
   - Compresser toutes les images
   - Vérifier les temps de chargement
   - Tester sur mobile

3. **Tester SEO** :
   - Partager l'URL sur Facebook/Twitter
   - Vérifier que l'OG image s'affiche
   - Utiliser les validators

4. **Build et Deploy** :
   ```bash
   npm run build
   # Vérifier qu'il n'y a pas d'erreurs
   # Deploy sur Vercel
   ```

## 📞 Besoin d'Aide ?

Si vous avez besoin d'aide pour créer ces assets :
- Fiverr : Designers freelance abordables
- Upwork : Designers professionnels
- 99designs : Concours de design
- Dribbble : Trouver des designers

---

**Une fois ces assets ajoutés, votre site sera 100% complet ! 🎉**

