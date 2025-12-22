# Déploiement sur Plesk

## Prérequis

- Serveur avec Plesk installé
- Accès SSH au serveur
- Node.js 18+ installé sur le serveur
- Domaine configuré dans Plesk

## Étape 1 : Préparer Plesk

### 1.1 Installer l'extension Node.js dans Plesk

1. Connectez-vous à Plesk
2. Allez dans **"Extensions"**
3. Recherchez **"Node.js"**
4. Cliquez sur **"Install"**

### 1.2 Créer un domaine

1. Allez dans **"Websites & Domains"**
2. Cliquez sur **"Add Domain"**
3. Entrez : `sitrabcam.com`
4. Configurez les paramètres de base

## Étape 2 : Configurer Node.js pour le domaine

### 2.1 Activer Node.js

1. Dans **"Websites & Domains"**, sélectionnez `sitrabcam.com`
2. Cliquez sur **"Node.js"**
3. Cochez **"Enable Node.js"**

### 2.2 Configuration Node.js

```
Application Mode: Production
Node.js Version: 18.x ou plus récent
Document Root: /httpdocs
Application Root: /httpdocs
Application Startup File: server.js (on va le créer)
```

## Étape 3 : Déployer le code

### Option A : Via Git (Recommandé)

#### 3.1 Configurer le dépôt Git dans Plesk

1. Dans votre domaine, allez dans **"Git"**
2. Cliquez sur **"Add Repository"**
3. Entrez votre URL GitHub :
   ```
   https://github.com/DominiqueOthniel/sitralanding.git
   ```
4. Branch : `main`
5. Repository path : `/httpdocs`

#### 3.2 Configurer les webhooks (optionnel)

Pour le déploiement automatique à chaque push GitHub.

### Option B : Via FTP

1. Builder le projet localement :
   ```bash
   npm run build
   ```

2. Télécharger via FTP :
   - Tout le contenu du projet
   - Dossier `.next`
   - `package.json`
   - `next.config.mjs`
   - Tous les fichiers source

## Étape 4 : Créer le fichier de démarrage

### 4.1 Créer `server.js` à la racine

Via **"File Manager"** dans Plesk, créez `server.js` :

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
```

### 4.2 Mettre à jour `package.json`

Modifiez le script `start` :

```json
"scripts": {
  "dev": "next dev -p 4028",
  "build": "next build",
  "start": "NODE_ENV=production node server.js",
  "lint": "next lint"
}
```

## Étape 5 : Installer les dépendances

### Via SSH :

```bash
cd /var/www/vhosts/sitrabcam.com/httpdocs
npm install
npm run build
```

### Via Plesk Node.js :

1. Dans Node.js settings
2. Cliquez sur **"NPM install"**
3. Attendez l'installation

## Étape 6 : Variables d'environnement

### Dans Plesk Node.js settings :

Ajoutez les variables d'environnement :

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://sitrabcam.com
PORT=3000
```

## Étape 7 : Configuration Apache/Nginx

### 7.1 Reverse Proxy

Plesk doit configurer un reverse proxy vers votre application Node.js.

Dans **"Apache & nginx Settings"** :

**Additional nginx directives :**

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## Étape 8 : SSL/HTTPS

### Dans Plesk :

1. Allez dans **"SSL/TLS Certificates"**
2. Cliquez sur **"Install"** ou **"Get it from Let's Encrypt"**
3. Sélectionnez votre domaine
4. Activez **"Secure the domain"**

## Étape 9 : Démarrer l'application

### Dans Node.js settings :

1. Cliquez sur **"Restart App"** ou **"Enable Node.js"**
2. Vérifiez le statut : vert = OK

## Étape 10 : Vérification

1. Visitez : `https://sitrabcam.com`
2. Vérifiez les logs dans Plesk → Node.js → Logs

## Dépannage

### L'application ne démarre pas

**Vérifier les logs :**
```bash
tail -f /var/www/vhosts/sitrabcam.com/logs/error_log
```

**Vérifier Node.js :**
```bash
node --version
npm --version
```

### Erreur de port

Si le port 3000 est occupé, changez dans :
- Variables d'environnement : `PORT=3001`
- Reverse proxy nginx : `proxy_pass http://localhost:3001;`

### Build échoue

```bash
cd /var/www/vhosts/sitrabcam.com/httpdocs
npm run build
```

Vérifiez les erreurs et corrigez.

### Permissions

```bash
chown -R username:psacln /var/www/vhosts/sitrabcam.com/httpdocs
chmod -R 755 /var/www/vhosts/sitrabcam.com/httpdocs
```

## Déploiement continu

### Script de déploiement

Créez `deploy.sh` :

```bash
#!/bin/bash
cd /var/www/vhosts/sitrabcam.com/httpdocs
git pull origin main
npm install
npm run build
# Redémarrer via Plesk API ou manuellement
echo "Deployment completed"
```

### Via Plesk Scheduled Tasks

Configurez une tâche planifiée pour exécuter le script après chaque push.

## Configuration DNS

Vos DNS sont déjà configurés, pointez simplement vers l'IP de votre serveur Plesk :

```
sitrabcam.com → A → IP_DE_VOTRE_SERVEUR_PLESK
www.sitrabcam.com → CNAME → sitrabcam.com
```

## Avantages Plesk vs Render

**Plesk :**
- ✅ Contrôle total du serveur
- ✅ Pas de mise en veille
- ✅ Peut héberger plusieurs sites
- ✅ Gestion complète (emails, bases de données, etc.)
- ❌ Plus complexe à configurer
- ❌ Maintenance serveur nécessaire

**Render :**
- ✅ Déploiement simple
- ✅ Pas de maintenance serveur
- ✅ Déploiement automatique
- ❌ Service gratuit se met en veille
- ❌ Moins de contrôle

## Support

- [Documentation Plesk Node.js](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/nodejs-support.74371/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

