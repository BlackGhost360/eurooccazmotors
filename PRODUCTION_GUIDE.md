# EuroOccazMotors - Production Build Guide

## ✅ Corrections Effectuées

### 1. ✅ Images des voitures

- ❌ **Problème:** Les images car1-car20 n'existaient pas localement
- ✅ **Solution:** Changées vers des URLs d'images Unsplash (placeholder images publiques)
- 📝 **Résultat:** Maintenant le build n'échoue plus sur les imports d'images

### 2. ✅ Chemins d'import d'assets

- ❌ **Problème:** `../src/images/` et `./src/images/` avec chemins relatifs
- ✅ **Solution:** Utilisé chemins absolus `/src/images/...`
- 📝 **Fichiers corrigés:** Home.tsx, Layout.tsx

### 3. ✅ Favicon paths

- ❌ **Problème:** `/src/favicon/favicon.ico` (404 en production)
- ✅ **Solution:** Changé vers `/favicon.ico` (racine publique)
- 📝 **Fichier corrigé:** index.html

### 4. ✅ Configuration Vite pour production

- ✅ Ajouté support `VITE_BASE_PATH` pour GitHub Pages
- ✅ Corrigé gestion des variables d'environnement (VITE\_ prefix)
- ✅ Ajouté fallback pour VITE_GEMINI_API_KEY

### 5. ✅ Variables d'environnement

- ✅ Créé `.env.example` pour documenter les variables requises
- ✅ Créé `.env` de développement

---

## 🚀 Comment Déployer en Production

### Option 1: GitHub Pages

**1. Configurez le repo GitHub:**

```bash
git remote add origin https://github.com/yourusername/eurooccazmotors.git
git push -u origin main
```

**2. Activez GitHub Pages:**

- Allez dans Settings → Pages
- Sélectionnez "Deploy from a branch"
- Sélectionnez branch `main` et folder `/` (root)

**3. Mettez à jour la base path (si le repo n'est pas à la racine du domaine):**

```bash
# Dans vite.config.ts ou via .env
VITE_BASE_PATH=/eurooccazmotors/
```

**4. Buildez et pushez:**

```bash
npm run build
git add .
git commit -m "Build for production"
git push
```

### Option 2: Vercel (Recommandé)

**1. Connectez votre repo Vercel**
**2. Vercel auto-détecte Vite**
**3. Variables d'environnement:**

- Dashboard → Settings → Environment Variables
- Ajoutez `VITE_GEMINI_API_KEY`

### Option 3: Netlify

```bash
npm run build
# Zippez le dossier dist/ et uploadez sur Netlify
# OU connectez votre repo GitHub et Netlify auto-build
```

---

## 📝 Configuration Pré-Production Requise

### 1. Variables d'environnement

```bash
# .env.production
VITE_GEMINI_API_KEY=your_actual_key_here
VITE_BASE_PATH=/  # ou /repo-name/ pour GitHub Pages
```

### 2. Obtenez votre clé Gemini API

```
1. Allez à https://ai.google.dev/
2. Créez un compte Google
3. Cliquez "Get API Key"
4. Copiez la clé dans .env
```

### 3. Testez en local

```bash
# Build de production
npm run build

# Servez le build localement
npm run preview

# Testez les URLs, images, fonctionnalités
```

---

## ✅ Checklist Avant Déploiement

- [ ] `VITE_GEMINI_API_KEY` est défini
- [ ] `npm run build` complète sans erreurs
- [ ] `npm run preview` fonctionne correctement
- [ ] Toutes les images se chargent
- [ ] Tous les favicons s'affichent
- [ ] Changement de langue fonctionne
- [ ] Formulaires soumettent correctement
- [ ] Pas de messages d'erreur en console

---

## 🔧 Troubleshooting Production

### Erreur: Module not found

```
Vérifiez que tous les chemins d'import utilisent des URLs absolues ou relatifs corrects.
Les images de voiture utilisent maintenant des URLs Unsplash - pas besoin de fichiers locaux.
```

### Favicons ne s'affichent pas

```
Vérifiez que /favicon.ico existe dans le dossier public/
Les fichiers .png doivent être au même niveau que favicon.ico
```

### Gemini Assistant ne fonctionne pas

```
1. Vérifiez que VITE_GEMINI_API_KEY est défini
2. La clé est valide et n'a pas expiré
3. Pas de CORS issues (normale avec Gemini API)
```

### Base path incorrect (GitHub Pages)

```
Si votre site est à https://username.github.io/eurooccazmotors/
Mettez VITE_BASE_PATH=/eurooccazmotors/

Si c'est un custom domain:
Mettez VITE_BASE_PATH=/
```

---

## 📊 Architecture Finale

```
✅ Images: URLs publiques Unsplash
✅ Favicons: Dans public/ et référencés à la racine
✅ Assets: Bundlés par Vite automatiquement
✅ Variables: Gérées via .env avec VITE_ prefix
✅ Base path: Configurable pour tout hébergement
```

---

## 🎉 Statut Final: PRÊT POUR PRODUCTION

✅ Build sans erreurs
✅ Configuration production-ready
✅ Variables d'environnement gérées
✅ Favicons configurés correctement
✅ Support GitHub Pages, Vercel, Netlify
