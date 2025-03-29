#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define paths for custom PHP and FPM configuration files
PHP_CUSTOM_INI=/usr/local/etc/php/conf.d/custom.ini
FPM_CUSTOM_CONF=/usr/local/etc/php-fpm.d/custom.conf

# Set a default container role if it's not provided
[ -z "${CONTAINER_ROLE}" ] && echo "CONTAINER_ROLE is unset, defaulting to 'app'." && CONTAINER_ROLE="app"

# Optional: Dynamically configure PHP and FPM settings based on environment variables
function config() {
    # Loop through environment variables starting with PHP_CONF_ and write to custom.ini
    for PHPVAR in $(env | grep "^PHP_CONF_"); do
        PARAM=$(echo ${PHPVAR} | cut -d "=" -f 1 | sed -e 's/^PHP_CONF_//' | tr '[:upper:]' '[:lower:]')
        VALUE=$(echo ${PHPVAR} | cut -d "=" -f 2)
        echo "${PARAM} = ${VALUE}" >> $PHP_CUSTOM_INI
    done

    # Loop through environment variables starting with FPM_CONF_ and write to custom.conf
    for FPMVAR in $(env | grep "^FPM_CONF_"); do
        PARAM=$(echo ${FPMVAR} | cut -d "=" -f 1 | sed -e 's/^FPM_CONF_//' | tr '[:upper:]' '[:lower:]')
        VALUE=$(echo ${FPMVAR} | cut -d "=" -f 2)
        echo "${PARAM} = ${VALUE}" >> $FPM_CUSTOM_CONF
    done

    # Fix ownership for Laravel writable directories
    chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
}

# Export secrets from Docker secrets files if any exist
for VAR in $(env | grep -E "=/run/secrets" | cut -d "=" -f 1); do
    if [ -s "${!VAR}" ]; then
        export ${VAR}=$(cat "${!VAR}")
    fi
done

# Run dynamic config logic
config

# Check if /vendor exists; if not, install Composer dependencies accordingly
if [ ! -d "vendor" ]; then
    echo "No vendor directory found. Installing dependencies..."

    if [[ "$APP_ENV" == "local" ]]; then
        echo "Running composer install for local environment..."
        composer install
    else
        echo "Running composer install for production environment..."
        composer install --no-dev --no-interaction --optimize-autoloader --no-scripts
    fi
fi

# If role is "migrate", run database migrations and exit
if [ "$CONTAINER_ROLE" = "migrate" ]; then
    echo "Running migrations..."
    php artisan migrate --force
    exit 0
fi

# Optimize Laravel caches (config, routes, views)
php artisan optimize

# Finally, run the container's main command (passed from CMD in Dockerfile or Compose)
exec "$@"
