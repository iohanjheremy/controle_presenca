# 🎓 Sistema de Controle de Presença

Projeto com arquitetura fullstack usando:

- **Backend:** Symfony + MySQL  
- **Frontend:** React.js (Vite)  
- **Gerenciamento:** Docker + Docker Compose

---

## 📁 Estrutura do Projeto

```
/
├── backend/         # Projeto Symfony
├── frontend/        # Projeto React (Vite)
├── docker/          # Configurações customizadas para PHP e Nginx
│   ├── php/
│   └── nginx/
└── docker-compose.yaml
```

---

## 🐳 Como rodar o projeto com Docker

### 🔧 Pré-requisitos

- Docker + Docker Compose instalados  
  👉 [Guia oficial de instalação](https://docs.docker.com/get-docker/)

---

### ▶️ Passos para iniciar

1. Clone o projeto:

```bash
git clone https://github.com/iohanjheremy/controle_presenca.git
cd controle_presenca
```

2. Clone o Backend:
```bash
git clone https://github.com/iohanjheremy/backend.git
cd ..
```

3. Execute o Docker Compose:

```bash
docker-compose up --build -d
```

Aguarde alguns instantes até os containers estarem todos funcionando.

---

## 🌐 Acesso às aplicações

| Serviço   | URL                             | Porta |
|-----------|---------------------------------|-------|
| Frontend  | http://localhost:5173           | 5173  |
| Backend   | http://localhost:8080           | 8080  |
| Endpoints | http://localhost:8080/api/docs  | 8080  |
| MySQL     | localhost:3306 (externo)        | 3306  |

> ⚠️ Certifique-se de que a API do backend está acessível antes de usar o frontend.

---

## 🔙 Backend - Symfony

📂 Local: `./backend`

### Comandos úteis:

```bash
# Acessar o container PHP
docker exec -it symfony-php bash

# Instalar dependências
composer install

# Rodar migrations
php bin/console doctrine:migrations:migrate

# Rodar servidor Symfony (não necessário, pois usamos nginx)
symfony server:start
```

### 📄 Variável `.env`

No backend, o arquivo `.env` deve conter:

```ini
DATABASE_URL="mysql://symfony:symfony@db:3306/controle_presenca"
```

---

## 🔜 Frontend - React (Vite)

📂 Local: `./frontend`

A aplicação React é servida automaticamente via Docker com o comando:

```bash
npm run dev
```

### 📄 Variável `.env` (no diretório `frontend`)

Crie o arquivo `.env` com o seguinte conteúdo:

```bash
VITE_API_URL=http://localhost:8080/api
```

---

## 🧑‍💻 Autor

- [@iohanjheremy](https://github.com/iohanjheremy)

---
