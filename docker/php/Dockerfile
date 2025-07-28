FROM php:8.3-fpm

# Instala dependências e extensões
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    unzip \
    zip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    default-mysql-client \
    && docker-php-ext-install pdo pdo_mysql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY --chown=www-data:www-data . /var/www/backend


WORKDIR /var/www/backend

COPY ./backend/composer.json ./backend/composer.lock* ./

RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Copiar o restante do projeto
COPY ./backend .

CMD ["php-fpm"]
