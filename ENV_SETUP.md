# Configuration des variables d'environnement

## Fichier .env.local créé

Le fichier `.env.local` a été créé à la racine du projet avec les variables suivantes :

```env
NEXT_PUBLIC_SITE_URL=https://sitrabcam.onrender.com
```

## Pour le développement local

Le fichier `.env.local` est déjà configuré. Vous pouvez le modifier si nécessaire.

**Important :** Ce fichier est dans `.gitignore` et ne sera PAS poussé sur GitHub (pour la sécurité).

## Pour Render (production)

### Option 1 : Via le Dashboard Render
1. Allez dans votre service sur Render
2. Cliquez sur **"Environment"** dans le menu
3. Ajoutez la variable :
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://votre-site.onrender.com` (remplacez par votre URL)

### Option 2 : Via render.yaml
Le fichier `render.yaml` contient déjà la configuration :
```yaml
envVars:
  - key: NEXT_PUBLIC_SITE_URL
    value: https://sitrabcam.onrender.com
```

## Variables disponibles

### NEXT_PUBLIC_SITE_URL (Requis)
Utilisé pour :
- Métadonnées SEO (Open Graph, Twitter Cards)
- Sitemap.xml
- Données structurées JSON-LD

**Valeur par défaut :** `https://sitrabcam.com` (utilisée si non définie)

### Variables optionnelles

#### NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
Pour ajouter Google Analytics :
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

#### NEXT_PUBLIC_FACEBOOK_PIXEL_ID
Pour ajouter Facebook Pixel :
```env
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXX
```

## Vérifier les variables

Pour vérifier que les variables sont bien chargées :

```bash
npm run dev
```

Puis regardez dans la console du navigateur ou dans le code source de la page les métadonnées.

## Fichiers .env

- `.env.local` - Variables locales (gitignored)
- `.env.example` - Template pour la documentation (versionné)

## Sécurité

✅ Les fichiers `.env*` sont dans `.gitignore`  
✅ Ne commitez JAMAIS vos clés API ou tokens  
✅ Les variables `NEXT_PUBLIC_*` sont exposées au client (browser)  
✅ Pour les secrets serveur, utilisez des variables sans le préfixe `NEXT_PUBLIC_`

## Domaine personnalisé

Si vous utilisez un domaine personnalisé, mettez à jour la variable :

```env
NEXT_PUBLIC_SITE_URL=https://www.sitrabcam.com
```

Et configurez votre domaine dans Render :
1. Settings → Custom Domain
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

