# ----------------------------
# 📦 VITE BUILD STAGE (Node)
# ----------------------------
FROM node:alpine AS npm-build

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run build


# ----------------------------
# 🏗️ PHP BUILD STAGE
# ----------------------------
FROM php:8.4-fpm AS build

# Install system dependencies + PHP extensions
RUN apt-get update && apt-get install -y \
    # Needed to extract compressed packages (e.g., Composer)
    unzip \
    # Allows HTTP requests—useful for scripts/tools
    curl \
    # Required if Composer pulls from Git repos
    git \
    # Needed for the zip PHP extension
    libzip-dev \
    # Needed for image handling (if you're using Intervention or GD)
    libpng-dev \
    # Required for mbstring (multibyte strings)
    libonig-dev \
 && docker-php-ext-install \
    # Base PDO (explicitly installing just in case)
    pdo \
    # Enables MySQL DB support
    pdo_mysql \
    # For zip support (used in Composer/Laravel sometimes)
    zip \
    # Multibyte string support — required by Laravel
    mbstring \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*


# ✅ Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory for Laravel app
WORKDIR /var/www/html

# Copy entire Laravel app codebase
COPY . ./

# Install only production PHP dependencies (no dev packages)
RUN composer install --no-dev --no-interaction --no-plugins --no-progress --no-scripts --optimize-autoloader

# Copy built frontend assets from npm stage into the Laravel public directory
COPY --from=npm-build /usr/src/app/public/ /var/www/html/public

# Optional Laravel optimizations (can uncomment if you're sure `.env` is ready)
# RUN php artisan config:cache \
#     && php artisan route:cache \
#     && php artisan view:cache

# Set proper permissions so Laravel can write to required directories
RUN chown www-data:www-data -R /var/www/html/bootstrap/cache
RUN chown www-data:www-data -R /var/www/html/storage

# Optional: Copy and configure entrypoint script
COPY docker/scripts/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh


