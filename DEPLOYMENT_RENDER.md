# Déploiement sur Render

## Étapes pour déployer sur Render

### 1. Créer un compte Render
- Allez sur [render.com](https://render.com)
- Inscrivez-vous gratuitement

### 2. Connecter votre dépôt GitHub
- Cliquez sur "New +" → "Web Service"
- Connectez votre compte GitHub
- Sélectionnez le dépôt `sitralanding`

### 3. Configuration automatique
Le fichier `render.yaml` est déjà configuré avec :
- **Runtime:** Node.js 18
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Plan:** Free (gratuit)

### 4. Variables d'environnement (optionnel)
Si vous avez un domaine personnalisé, modifiez dans le dashboard Render :
- `NEXT_PUBLIC_SITE_URL` → votre URL Render ou domaine personnalisé

### 5. Configuration manuelle (alternative)
Si vous ne voulez pas utiliser `render.yaml` :

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npm start
```

**Environment Variables:**
- `NODE_VERSION`: `18`
- `NEXT_PUBLIC_SITE_URL`: `https://votre-site.onrender.com`

### 6. Déployer
- Cliquez sur "Create Web Service"
- Render va automatiquement :
  - Installer les dépendances
  - Builder le projet
  - Déployer le site

### 7. URL du site
Votre site sera disponible à :
```
https://sitrabcam.onrender.com
```
(ou le nom que vous avez choisi)

## Redéploiement automatique
Render redéploie automatiquement à chaque push sur la branche `main`.

## Plan gratuit Render
- ✅ Sites statiques et applications Next.js
- ✅ Déploiements automatiques
- ✅ HTTPS gratuit
- ⚠️ Le service peut se mettre en veille après 15 min d'inactivité
- ⚠️ Premier chargement peut être lent (réveil du service)

## Domaine personnalisé
Pour ajouter un domaine personnalisé :
1. Allez dans "Settings" de votre service
2. Cliquez sur "Custom Domain"
3. Ajoutez votre domaine
4. Configurez les DNS selon les instructions

## Support
- [Documentation Render](https://render.com/docs)
- [Render + Next.js](https://render.com/docs/deploy-nextjs-app)

