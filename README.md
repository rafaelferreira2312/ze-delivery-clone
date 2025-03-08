# Zé Delivery Clone  

Clone completo do Zé Delivery, um aplicativo de entrega de bebidas em tempo real, desenvolvido com uma stack moderna e escalável.  

---

## 📋 **Índice**  
- [Introdução](#-introdução)  
- [Instalação](#-instalação)  
- [Configuração](#-configuração)  
- [Uso](#-uso)  
- [Funcionalidades](#-funcionalidades)  
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)  
- [Estrutura de Diretórios](#-estrutura-de-diretórios)  
- [Contribuição](#-contribuição)  
- [Licença](#-licença)  

---

## 🚀 **Introdução**  
Este projeto é um clone do Zé Delivery, um serviço de entrega de bebidas em tempo real, construído com React, React Native, Node.js e MongoDB. Ele inclui:  
- **Site para os usuários realizarem pedidos**  
- **Aplicativo Mobile (Android e iOS)**  
- **Painel Administrativo para gerenciar produtos e pedidos**  

---

## 🛠️ **Instalação**  
Clone o repositório:  
```bash
git clone https://github.com/usuario/ze-delivery-clone.git
cd ze-delivery-clone
```

## Instale as dependências:

# Frontend
```bash
cd frontend
npm install
```

# Mobile
```bash
cd ../mobile
npm install
```

# Backend
```bash
cd ../backend
npm install
```

# Painel Administrativo
```bash
cd ../admin-panel
npm install
```

## 🌍 Configuração

- Crie um arquivo .env em cada módulo com base no .env.example:

- Exemplo de .env para o Backend:
```bash
DATABASE_URL=mongodb://localhost:27017/ze_delivery
JWT_SECRET=mysecretkey
PORT=5000
```

## ✨ Funcionalidades

✅ Login com e-mail e redes sociais
✅ Busca de produtos
✅ Carrinho de compras
✅ Rastreamento em tempo real
✅ Notificações push
✅ Histórico de pedidos
✅ Sistema de cupons

🧰 Tecnologias Utilizadas

    - Frontend: React.js, TypeScript
    - Mobile: React Native
    - Backend: Node.js, Express
    - Banco de Dados: MongoDB
    - Autenticação: Firebase ou JWT
    - Geolocalização: Google Maps API

## 👥 Contribuição

    - Fork este repositório
    - Crie uma branch (feature/nova-funcionalidade)
    - Commit suas alterações (git commit -m 'Adiciona nova funcionalidade')
    - Push para o branch (git push origin feature/nova-funcionalidade)
    - Crie um Pull Request