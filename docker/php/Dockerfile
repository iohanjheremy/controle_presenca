FROM php:8.2-fpm

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libicu-dev \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    libcurl4-openssl-dev \
    libxslt1-dev \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev \
    && docker-php-ext-install \
    intl \
    pdo \
    pdo_mysql \
    zip \
    opcache \
    mbstring \
    xml \
    ctype \
    iconv \
    tokenizer \
    dom \
    bcmath

# Instalar o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/backend

# Copiar composer.json e instalar dependências
COPY backend/composer.json backend/composer.lock* ./
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Copiar o restante do projeto
COPY backend ./

# Ajustar permissões
RUN chown -R www-data:www-data /var/www/backend

CMD ["php-fpm"]
