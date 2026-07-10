#!/usr/bin/env bash
set -euo pipefail

APP_NAME="practice-blog"
SOURCE_DIR="${1:-$HOME/practice-blog}"
TARGET_DIR="/var/www/${APP_NAME}"
NGINX_CONF="/etc/nginx/sites-available/${APP_NAME}"
APP_PORT="${APP_PORT:-8080}"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source directory not found: $SOURCE_DIR"
  exit 1
fi

sudo mkdir -p "$TARGET_DIR"
sudo rsync -av --delete \
  --exclude ".git" \
  --exclude "node_modules" \
  "$SOURCE_DIR/" "$TARGET_DIR/"

sudo tee "$NGINX_CONF" >/dev/null <<NGINX
server {
    listen ${APP_PORT};
    server_name _;
    root ${TARGET_DIR};
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
NGINX

sudo ln -sfn "$NGINX_CONF" "/etc/nginx/sites-enabled/${APP_NAME}"
sudo nginx -t
sudo systemctl reload nginx

echo "Deployed ${APP_NAME} to ${TARGET_DIR} on port ${APP_PORT}"
