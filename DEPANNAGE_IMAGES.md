# Guide de Dépannage - Images non visibles

## ✅ Corrections Appliquées

1. **Composant AnimatedImage amélioré** :
   - Les images locales sont maintenant mieux gérées
   - Opacité initiale améliorée (plus de 0, donc visible)
   - Meilleure gestion des erreurs de chargement

2. **Galerie d'images** :
   - Ajout d'un fond gris pendant le chargement
   - Meilleure gestion des erreurs

## 🔧 Étapes pour Résoudre le Problème

### 1. Redémarrer le Serveur de Développement

**Important** : Next.js doit être redémarré pour reconnaître les nouvelles images dans le dossier `public`.

```bash
# Arrêter le serveur (Ctrl+C)
# Puis redémarrer :
npm run dev
```

### 2. Vérifier que les Images sont Présentes

Les images doivent être dans : `public/assets/images/`
- galerie-1.jpg
- galerie-2.jpg
- galerie-3.jpg
- galerie-4.jpg
- galerie-5.jpg
- galerie-6.jpg
- galerie-7.jpg

### 3. Vider le Cache du Navigateur

- **Chrome/Edge** : Ctrl+Shift+Delete → Cocher "Images et fichiers en cache" → Effacer
- **Firefox** : Ctrl+Shift+Delete → Cocher "Cache" → Effacer
- Ou utiliser le mode navigation privée pour tester

### 4. Vérifier la Console du Navigateur

Ouvrez la console (F12) et vérifiez s'il y a des erreurs :
- Erreurs 404 : les images ne sont pas trouvées
- Erreurs CORS : problème de permissions
- Autres erreurs : notez-les

### 5. Vérifier les Chemins

Les chemins utilisés dans le code sont :
- `/assets/images/galerie-1.jpg`
- `/assets/images/galerie-2.jpg`
- etc.

Ces chemins sont relatifs au dossier `public`, donc corrects.

## 🐛 Problèmes Courants

### Les images ne s'affichent pas du tout
- **Solution** : Redémarrer le serveur Next.js
- Vérifier que les fichiers sont bien dans `public/assets/images/`

### Les images s'affichent mais sont floues
- **Solution** : Normal, c'est l'animation "fadeBlur" qui se charge
- Attendre quelques secondes, elles devraient devenir nettes

### Erreur 404 dans la console
- **Solution** : Vérifier que les noms de fichiers correspondent exactement
- Les noms sont sensibles à la casse (galerie-1.jpg ≠ Galerie-1.jpg)

### Les images s'affichent mais lentement
- **Solution** : Normal pour le lazy loading
- Les images se chargent au fur et à mesure du scroll

## 📝 Test Rapide

Pour tester si les images sont accessibles, ouvrez dans votre navigateur :
```
http://localhost:4028/assets/images/galerie-1.jpg
```

Si l'image s'affiche, le problème vient du composant.
Si l'image ne s'affiche pas, le problème vient du serveur ou des fichiers.

## 🔄 Si Rien ne Fonctionne

1. Vérifier que le serveur Next.js tourne sur le port 4028
2. Vérifier les permissions des fichiers images
3. Essayer de redémarrer complètement l'ordinateur
4. Vérifier qu'il n'y a pas d'erreurs dans le terminal où tourne Next.js


