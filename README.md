# Documentação do Projeto h2o-frontend

## 📋 Visão Geral
Aplicativo web para controle de consumo de água, desenvolvido em React.js. Permite cadastro de usuários, registro de consumo diário e visualização de histórico.

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v14+)
- npm (v6+)

### Instalação
```bash
git clone [seu-repositorio]
cd h2o-frontend
npm install
npm start
```

O aplicativo estará disponível em: `http://localhost:3000`

## 📦 Dependências Principais
```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.3.0",
  "react-scripts": "5.0.1"
}
```

## 🌐 Rotas Disponíveis

| Rota          | Descrição                              | Acesso       |
|---------------|----------------------------------------|-------------|
| `/`           | Redireciona para `/login`              | Público     |
| `/login`      | Tela de autenticação                   | Público     |
| `/cadastro`   | Tela de registro de novos usuários     | Público     |
| `/registro`   | Tela principal de consumo de água      | Privado     |
| `/historico`  | Visualização do histórico de consumo   | Privado     |

## 🖼️ Telas do Sistema

### 1. Tela de Cadastro (`/cadastro`)
![Tela de Cadastro](https://via.placeholder.com/400x600?text=Tela+de+Cadastro)

**Componentes:**
- Formulário com 2 campos:
  - Nome do usuário (texto)
  - Peso (número)
- Botão "Confirmar Cadastro"

**Comportamento:**
- Armazena dados no `localStorage`

---

### 2. Tela de Login (`/login`)
![Tela de Login](https://via.placeholder.com/400x600?text=Tela+de+Login)

**Componentes:**
- Campo para nome de usuário
- Botão "Login"

**Comportamento:**
- Verifica usuário no `localStorage`
- Redireciona para `/registro` após login

---

### 3. Tela de Registro (`/registro`)
![Tela de Registro](https://via.placeholder.com/400x600?text=Tela+de+Registro)

**Componentes:**
- Seletor de dose (200ml, 350ml, 500ml)
- Botão "Registrar"
- Tabela com:
  - Meta diária
  - Consumo atual
  - Progresso
- Botão "Histórico"

**Lógica:**
- Calcula meta baseada no peso (35ml/kg)
- Armazena registros no `localStorage`

---

### 4. Tela de Histórico (`/historico`)
![Tela de Histórico](https://via.placeholder.com/400x600?text=Tela+de+Historico)

**Componentes:**
- Título com nome do usuário
- Tabelas com registros diários:
  - Data
  - Meta do dia
  - Consumo
  - Status (atingiu meta?)

---

## 🛠️ Estrutura do Projeto
```
src/
├── components/    # Componentes reutilizáveis
│   ├── Button.js
│   ├── Input.js
│   ├── RadioGroup.js
│   └── Table.js
├── pages/         # Telas do aplicativo
│   ├── Cadastro.js
│   ├── Login.js
│   ├── Registro.js
│   └── Historico.js
├── styles/        # Folhas de estilo
│   ├── global.css
│   ├── cadastro.css
│   ├── login.css
│   ├── registro.css
│   └── historico.css
├── App.js         # Configuração de rotas
└── index.js       # Ponto de entrada
```

## 🔧 Variáveis de Configuração
O sistema utiliza as seguintes constantes:
- **Fator de cálculo de meta**: 35ml por kg de peso
- **Opções de dose**: 200ml, 350ml, 500ml
# h2o-frontend
