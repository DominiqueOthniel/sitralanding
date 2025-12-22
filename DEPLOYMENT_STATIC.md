# Déploiement en Mode Statique (HTML pur)

## 🎯 Vue d'ensemble

Votre site Next.js est maintenant configuré en **mode "export statique"**, ce qui signifie qu'il génère des **fichiers HTML, CSS et JavaScript purs** qui fonctionnent sur **n'importe quel hébergement web** (Apache, Nginx, Plesk, etc.) **sans avoir besoin de Node.js**.

---

## ✅ Avantages du mode statique

- ✅ **Pas besoin de Node.js** sur le serveur
- ✅ **Fonctionne sur n'importe quel hébergement** (même basique)
- ✅ **Performance maximale** (fichiers pré-générés)
- ✅ **Sécurité accrue** (pas de serveur backend)
- ✅ **Coût réduit** (hébergement moins cher)
- ✅ **Simple à déployer** (copier-coller de fichiers)

---

## 📦 Modifications effectuées

### 1. `next.config.mjs`
- Ajout de `output: 'export'` pour activer l'export statique
- Ajout de `images: { unoptimized: true }` pour les images statiques

### 2. `.htaccess`
- Fichier de configuration Apache/Plesk créé
- Gestion des routes (SPA routing)
- Redirection HTTPS
- Cache des fichiers statiques
- Compression Gzip

---

## 🚀 Comment déployer sur Plesk

### **Étape 1 : Builder le site sur votre ordinateur**

Ouvrez un terminal dans le dossier du projet et lancez :

```bash
npm run build
```

Cela va créer un dossier **`out/`** contenant tous les fichiers du site statique.

### **Étape 2 : Préparer les fichiers**

Dans le dossier `out/`, vous trouverez :
```
out/
  ├── index.html
  ├── _next/
  │   ├── static/
  │   └── ...
  ├── images/
  └── ...
```

**Important** : Copiez aussi le fichier `.htaccess` à la racine du dossier `out/`.

### **Étape 3 : Uploader sur Plesk**

#### Via Gestionnaire de fichiers :

1. **Connexion à Plesk** → **Sites Web & Domaines** → **sitrabcam.com**
2. Cliquez sur **"Gestionnaire de fichiers"**
3. Allez dans le dossier **`httpdocs`**
4. **Supprimez TOUT** le contenu actuel de `httpdocs`
5. **Uploadez TOUT le contenu** du dossier `out/` (y compris `.htaccess`)
   - Vous pouvez créer un ZIP du contenu de `out/` pour l'upload
   - Puis extraire le ZIP dans `httpdocs`
   - **Attention** : Les fichiers doivent être directement dans `httpdocs`, pas dans un sous-dossier

#### Via FTP :

1. Connectez-vous en FTP à votre serveur
2. Allez dans `/var/www/vhosts/sitrabcam.com/httpdocs/`
3. Supprimez tout
4. Uploadez le contenu de `out/` (y compris `.htaccess`)

### **Étape 4 : Vérifier la structure**

Dans `httpdocs`, vous devez avoir :
```
httpdocs/
  ├── .htaccess         ← Important !
  ├── index.html
  ├── _next/
  │   ├── static/
  │   └── ...
  ├── images/
  └── ...
```

### **Étape 5 : Tester le site**

Visitez : **https://sitrabcam.com**

✅ Le site devrait fonctionner immédiatement !

---

## 🔄 Mettre à jour le site

Pour mettre à jour le site après des modifications :

1. Modifiez le code source
2. Relancez `npm run build`
3. Uploadez le nouveau contenu de `out/` sur Plesk
4. C'est tout ! Les changements sont visibles immédiatement

---

## 🌐 Configuration DNS

Le DNS reste le même qu'avant :

### Sur Plesk :
- **Enregistrement A** : `sitrabcam.com` → `188.165.227.227`
- **Enregistrement CNAME** : `www` → `sitrabcam.com`

### SSL/HTTPS :
- Activez **Let's Encrypt SSL** dans Plesk :
  - **Sites Web & Domaines** → **sitrabcam.com** → **SSL/TLS Certificates**
  - Cliquez sur **"Install"** ou **"Get it free"** pour Let's Encrypt
  - Le `.htaccess` redirigera automatiquement HTTP vers HTTPS

---

## 📋 Commandes utiles

### Builder le site :
```bash
npm run build
```

### Tester en local avant déploiement :
```bash
# Installer un serveur HTTP simple
npm install -g serve

# Servir le dossier out/
serve out/

# Ouvrir http://localhost:3000 dans le navigateur
```

### Créer un ZIP pour l'upload :
```bash
# Sur Windows (PowerShell)
Compress-Archive -Path out\* -DestinationPath site-static.zip

# Sur Mac/Linux
cd out && zip -r ../site-static.zip . && cd ..
```

---

## ⚠️ Limitations du mode statique

### Ce qui ne fonctionne PAS en mode statique :
- ❌ **Server-Side Rendering (SSR)** : Les pages sont pré-générées au build
- ❌ **API Routes** : Pas de backend Node.js
- ❌ **Incremental Static Regeneration (ISR)** : Pas de revalidation automatique
- ❌ **Image Optimization dynamique** : Les images ne sont plus optimisées à la volée

### Ce qui fonctionne PARFAITEMENT :
- ✅ **Tout le contenu statique** : Textes, images, styles
- ✅ **Interactivité côté client** : React, useState, useEffect, etc.
- ✅ **Formulaires** : Ils peuvent envoyer vers WhatsApp (comme configuré)
- ✅ **Navigation** : Toutes les routes fonctionnent
- ✅ **SEO** : Métadonnées, JSON-LD, sitemap (pré-générés)
- ✅ **Animations** : Toutes les animations React/CSS

**Pour votre site vitrine SITRAB, c'est PARFAIT !** ✅

---

## 🆘 Dépannage

### Le site affiche une erreur 404
- Vérifiez que `.htaccess` est bien présent dans `httpdocs`
- Vérifiez que le module `mod_rewrite` est activé dans Apache (généralement activé par défaut sur Plesk)

### Les images ne s'affichent pas
- Vérifiez que les dossiers `_next/` et `images/` sont bien uploadés
- Vérifiez les permissions des fichiers (755 pour les dossiers, 644 pour les fichiers)

### Erreur "Internal Server Error"
- Vérifiez le fichier `.htaccess` (peut avoir des problèmes de compatibilité)
- Consultez les logs Apache dans Plesk : **Sites Web & Domaines** → **Logs**

### Les routes ne fonctionnent pas (404 sur /produits, etc.)
- Assurez-vous que `.htaccess` contient la règle de réécriture
- Vérifiez que `mod_rewrite` est activé

---

## 🎉 Félicitations !

Votre site est maintenant en mode statique et peut être hébergé sur **n'importe quel serveur web** sans configuration compliquée !

Plus besoin de :
- ❌ Node.js sur le serveur
- ❌ PM2
- ❌ Proxy inverse
- ❌ Configuration serveur complexe

**Juste des fichiers HTML qui fonctionnent partout !** 🚀

