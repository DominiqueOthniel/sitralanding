# Configuration du domaine sitrabcam.com sur Render

## Configuration DNS

Pour utiliser votre domaine `sitrabcam.com` avec Render, configurez les enregistrements DNS suivants chez votre registrar (fournisseur de domaine) :

### Option 1 : CNAME (Recommandé pour www)
```
Type: CNAME
Name: www
Value: votreapp.onrender.com
TTL: 3600
```

### Option 2 : A Record (Pour le domaine racine)
```
Type: A
Name: @
Value: [IP fournie par Render]
TTL: 3600
```

**Note :** Render fournira l'adresse IP dans les paramètres de domaine personnalisé.

## Configuration sur Render

### 1. Ajouter le domaine personnalisé
1. Allez sur votre dashboard Render
2. Sélectionnez votre service web
3. Cliquez sur **"Settings"** → **"Custom Domain"**
4. Cliquez sur **"Add Custom Domain"**
5. Entrez : `sitrabcam.com`
6. Suivez les instructions pour configurer les DNS

### 2. Ajouter www (optionnel)
Répétez le processus pour `www.sitrabcam.com` si vous voulez que les deux fonctionnent.

### 3. SSL/HTTPS automatique
Render configure automatiquement un certificat SSL gratuit (Let's Encrypt) pour votre domaine.

## Redirection www → non-www (ou inverse)

Pour rediriger `www.sitrabcam.com` vers `sitrabcam.com` :
1. Ajoutez les deux domaines dans Render
2. Configurez une redirection dans les paramètres

## Vérification

Après configuration DNS (peut prendre 24-48h) :
1. Visitez `https://sitrabcam.com`
2. Vérifiez le certificat SSL (cadenas vert)
3. Testez `https://www.sitrabcam.com` si configuré

## Propagation DNS

La propagation DNS peut prendre de **quelques minutes à 48 heures**.

Vérifiez la propagation avec :
- [whatsmydns.net](https://www.whatsmydns.net/)
- `nslookup sitrabcam.com`

## Registrars populaires

### Namecheap
1. Advanced DNS → Add New Record
2. Type: CNAME, Host: www, Value: votreapp.onrender.com

### GoDaddy
1. DNS Management → Add Record
2. Type: CNAME, Name: www, Value: votreapp.onrender.com

### Cloudflare
1. DNS → Add record
2. Type: CNAME, Name: www, Content: votreapp.onrender.com
3. Proxy status: DNS only (gris) pour commencer

### OVH
1. Zone DNS → Ajouter une entrée
2. Type: CNAME, Sous-domaine: www, Cible: votreapp.onrender.com

## Variables d'environnement

Les variables sont déjà configurées avec `sitrabcam.com` :
- ✅ `render.yaml` : `NEXT_PUBLIC_SITE_URL=https://sitrabcam.com`
- ✅ `.env.local` : `NEXT_PUBLIC_SITE_URL=https://sitrabcam.com`

## Problèmes courants

### DNS ne se propage pas
- Attendez 24-48h
- Vérifiez les enregistrements chez votre registrar
- Essayez en navigation privée

### "Site can't be reached"
- Vérifiez que le service Render est déployé et actif
- Vérifiez la configuration DNS

### Certificat SSL invalide
- Attendez que Render génère le certificat (quelques minutes après ajout du domaine)
- Essayez en navigation privée

## Support

- [Documentation Render - Custom Domains](https://render.com/docs/custom-domains)
- Dashboard Render → Votre service → Settings → Custom Domain

