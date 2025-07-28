# 📚 Sistema de Controle de Presença

Projeto dividido em dois repositórios:

- **Frontend (React.js):** [controle_presenca](https://github.com/iohanjheremy/controle_presenca)
- **Backend (Symfony):** [backend](https://github.com/iohanjheremy/backend)

---

## 🐳 Como rodar o projeto com Docker

### 🔧 Pré-requisitos

- Docker instalado ([instalar Docker](https://docs.docker.com/get-docker/))
- Docker Compose instalado (normalmente já incluso no Docker Desktop)

---

## 🔙 Backend (Symfony)

### 📁 Clone o repositório
```bash

git clone https://github.com/iohanjheremy/backend.git
cd backend

▶️ Rodar com Docker
docker-compose up --build -d

💡 Comandos úteis
# Instalar dependências PHP
docker exec -it php bash -c "composer install"

# Rodar migrations
docker exec -it php php bin/console doctrine:migrations:migrate

# Acessar container
docker exec -it php bash
---
```bash

🌐 Endpoints
API disponível em: http://localhost:8080/api
Documentação Swagger: http://localhost:8080/api/docs

🔜 Frontend (React.js)
📁 Clone o repositório

git clone https://github.com/iohanjheremy/controle_presenca.git
cd controle_presenca


▶️ Rodar com Docker
docker build -t controle_presenca_frontend .
docker run -d -p 3000:3000 --name frontend_app controle_presenca_frontend
