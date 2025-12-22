#!/bin/bash
# Script de déploiement pour Plesk - sitrabcam.com

set -e

echo "🚀 Déploiement de sitrabcam.com sur Plesk..."

# Variables
DOMAIN_PATH="/var/www/vhosts/sitrabcam.com/httpdocs"
SITE_URL="https://sitrabcam.com"

# Aller dans le répertoire
cd $DOMAIN_PATH

echo "📦 Installation des dépendances..."
npm install

echo "🔨 Build du projet..."
npm run build

echo "📝 Configuration des variables d'environnement..."
cat > .env.local << EOF
NEXT_PUBLIC_SITE_URL=$SITE_URL
NODE_ENV=production
PORT=3000
EOF

echo "🔧 Installation de PM2 (si nécessaire)..."
npm install -g pm2 2>/dev/null || true

echo "🔄 Arrêt de l'application existante (si elle existe)..."
pm2 stop sitrabcam 2>/dev/null || true
pm2 delete sitrabcam 2>/dev/null || true

echo "▶️  Démarrage de l'application..."
pm2 start server.js --name sitrabcam

echo "💾 Sauvegarde de la configuration PM2..."
pm2 save

echo "🎯 Configuration du démarrage automatique..."
pm2 startup | grep -v "PM2" | bash || true

echo "✅ Déploiement terminé !"
echo "📍 Visitez : $SITE_URL"
echo ""
echo "Commandes utiles :"
echo "  pm2 logs sitrabcam    # Voir les logs"
echo "  pm2 restart sitrabcam # Redémarrer"
echo "  pm2 status            # Voir le statut"

