# Configuration Git sur Plesk - sitrabcam.com

## Problème rencontré
```
filemng: Failed to change directory to /var/www/vhosts/sitrabcam.com/git/sitrabcam: No such file or directory
```

## Solution : Configuration manuelle via SSH

### Étape 1 : Créer la structure Git

```bash
# Connexion SSH
ssh votre-utilisateur@sitrabcam.com

# Aller à la racine du domaine
cd /var/www/vhosts/sitrabcam.com

# Créer le répertoire git
mkdir -p git

# Aller dans le répertoire git
cd git

# Cloner votre dépôt
git clone https://github.com/votre-username/sitralanding.git sitrabcam

# Aller dans le dépôt
cd sitrabcam

# Copier les fichiers vers httpdocs
cp -r * /var/www/vhosts/sitrabcam.com/httpdocs/
cp -r .next /var/www/vhosts/sitrabcam.com/httpdocs/ 2>/dev/null
cp .env.local /var/www/vhosts/sitrabcam.com/httpdocs/ 2>/dev/null

# Corriger les permissions
cd /var/www/vhosts/sitrabcam.com/httpdocs
chown -R sitrabcamcom:psacln .
chmod -R 755 .
```

### Étape 2 : Installer les dépendances

```bash
cd /var/www/vhosts/sitrabcam.com/httpdocs

# Installer les dépendances
npm install

# Construire le projet
npm run build
```

### Étape 3 : Configurer Node.js dans Plesk

1. **Sites Web & Domaines** → **sitrabcam.com** → **Node.js**
2. Configuration :
   - ✅ Enable Node.js
   - Version: **18.x**
   - Application Mode: **Production**
   - Application Root: **httpdocs**
   - Application Startup File: **server.js**
   - Environment Variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://sitrabcam.com
     NODE_ENV=production
     PORT=3000
     ```
3. Cliquez sur **"Restart App"**

### Étape 4 : Configurer le Proxy Inverse (Apache/Nginx)

#### Pour Apache :
Créer `.htaccess` dans `/httpdocs` :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_URI} !^/\.well-known/
  RewriteCond %{HTTP:Upgrade} !=websocket
  RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
</IfModule>
```

#### Pour Nginx :
Dans Plesk → **Paramètres Apache & nginx** :
```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
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

---

## Alternative : Upload manuel (sans Git)

Si vous n'avez pas accès SSH, suivez cette méthode :

### 1. Télécharger le projet depuis GitHub

1. Allez sur votre dépôt GitHub
2. Cliquez sur **"Code"** → **"Download ZIP"**
3. Enregistrez le fichier

### 2. Upload via Plesk File Manager

1. **Sites Web & Domaines** → **sitrabcam.com** → **Gestionnaire de fichiers**
2. Allez dans **`httpdocs`**
3. **Supprimer** tous les anciens fichiers (sauf .htaccess si présent)
4. Cliquez sur **"Télécharger des fichiers"**
5. Sélectionnez votre ZIP
6. Après l'upload, **clic droit** sur le ZIP → **"Extraire"**
7. Si les fichiers sont dans un sous-dossier (ex: `sitralanding-main/`), **déplacez-les** vers la racine de `httpdocs`

### 3. Vérifier la structure

Dans `/httpdocs`, vous devez avoir directement :
```
httpdocs/
  ├── src/
  ├── public/
  ├── package.json
  ├── server.js
  ├── next.config.mjs
  └── ...
```

### 4. Configurer Node.js

Suivez l'**Étape 3** ci-dessus.

---

## Commandes utiles après installation

### Redémarrer l'application :
```bash
cd /var/www/vhosts/sitrabcam.com/httpdocs
pm2 restart sitrabcam || pm2 start server.js --name sitrabcam
```

### Voir les logs :
```bash
pm2 logs sitrabcam
```

### Rebuild après modification :
```bash
cd /var/www/vhosts/sitrabcam.com/httpdocs
npm run build
pm2 restart sitrabcam
```

---

## Vérification finale

Visitez : **https://sitrabcam.com**

✅ Le site devrait s'afficher correctement !

