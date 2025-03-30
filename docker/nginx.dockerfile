# Build frontend assets
FROM node:alpine as npm-build
WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run build

# Generate SSL certs
FROM alpine as openssl-build
RUN apk add --no-cache openssl
# Days is 5 years and rsa 4096 is the key size slower but more secure
RUN openssl req -x509 -nodes -days 1825 -newkey rsa:4096 \
    -subj "/C=US/ST=State/L=City/O=Dev/CN=localhost" \
    -keyout /tmp/key.pem -out /tmp/cert.pem

# Final Nginx image
FROM nginx:1.22-alpine

# Nginx config (should support both HTTP and HTTPS)
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf

# SSL certs
RUN mkdir -p /etc/nginx/ssl
COPY --from=openssl-build /tmp/key.pem /etc/nginx/ssl/
COPY --from=openssl-build /tmp/cert.pem /etc/nginx/ssl/

# Frontend assets
COPY --from=npm-build /usr/src/app/public/ /var/www/html/public

