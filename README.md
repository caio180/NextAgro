# NextAgro

## Sobre o Projeto

O NextAgro é uma plataforma informativa voltada para o agronegócio brasileiro, reunindo conteúdos sobre produção agrícola, sustentabilidade, tecnologia no campo e conscientização ambiental.

O objetivo do projeto é disponibilizar informações educativas e acessíveis sobre a importância do agronegócio para a economia do Brasil, destacando culturas como café e cana-de-açúcar, além de apresentar soluções sustentáveis e tecnologias utilizadas no setor.

---

## Funcionalidades

- Página inicial com apresentação do projeto;
- Informações sobre o agronegócio brasileiro;
- Conteúdo sobre produção de café no Brasil;
- Conteúdo sobre produção de açúcar e cana-de-açúcar;
- Seção dedicada à sustentabilidade no campo;
- Apresentação de tecnologias utilizadas no agronegócio;
- Informações sobre problemas ambientais e soluções sustentáveis;
- Videos sobre soluções sustentáveis
- Formulário para envio de sugestões dos usuários;
- Navegação por menu com âncoras para acesso rápido às seções.

---

## Tecnologias Utilizadas

### Front-end
 - **HTML5**
 - **CSS3**
 - **JavaScript**

### Back-end
- **Node.js**

### Banco de Dados
- **MySQL**

---

## Estrutura do Projeto

```text
NextAgro/
│
├── backend/
│   ├── controllers/
│   │    └── controller.js
│   ├── database/
│   │    └── connection.js
│   │    └── nextagro.sql
│   ├── models/
│   │    └── model.js
│   ├── node_modules/
│   ├── routes/
│   │    └── rotas.js
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── img/
│   ├── acucar.jpg
│   ├── agro_brasil.jpg
│   ├── banner_nextagro.jpg
│   ├── cafe.jpg
│   └── problemas_ambientais.jpg
│   ├── sustentabilidade.jpg
│   ├── tecnologia.jpg
│
└── README.md
```

---


## Instalação e Execução

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14+) - [Download](https://nodejs.org/)
- **MySQL** (versão 5.7+) - [Download](https://dev.mysql.com/downloads/mysql/)
- **Git** - [Download](https://git-scm.com/)

### 1. Instalar MySQL

**No Windows:**
- Baixe o instalador em [mysql.com](https://dev.mysql.com/downloads/mysql/)
- Execute o instalador e siga as instruções
- Anote a senha do usuário root durante a instalação

**No macOS (com Homebrew):**
```bash
brew install mysql
brew services start mysql
```

**No Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install mysql-server
sudo mysql_secure_installation
```

### 2. Clone o repositório

```bash
git clone https://github.com/caio180/NextAgro.git
cd NextAgro
```

### 3. Crie o banco de dados MySQL

Acesse o MySQL:

```bash
mysql -u root -p
```

Digite sua senha e execute os comandos SQL:

```sql
CREATE DATABASE IF NOT EXISTS nextagro;
USE nextagro;

CREATE TABLE sugestoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    melhoria TEXT,
    assuntos TEXT,
    avaliacao VARCHAR(20),
);
```

Ou, se preferir usar o arquivo SQL fornecido:

```bash
mysql -u root -p nextagro < backend/database/nextagro.sql
```

### 4. Instale as dependências do backend

```bash
cd backend
npm install
```

### 5. Configure as variáveis de ambiente

No diretório `backend/`, crie um arquivo `.env` baseado no `.env.example`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_mysql
DB_NAME=nextagro
DB_PORT=3306
```

**Explicação das variáveis:**
- `PORT`: Porta em que o servidor Node.js rodará
- `DB_HOST`: Endereço do servidor MySQL (localhost para máquina local)
- `DB_USER`: Usuário MySQL (padrão: root)
- `DB_PASSWORD`: Senha do usuário MySQL
- `DB_NAME`: Nome do banco de dados criado
- `DB_PORT`: Porta do MySQL (padrão: 3306)

### 6. Execute o backend

Na pasta `backend/`, inicie o servidor:

```bash
npm start
```

ou

```bash
node server.js
```

O servidor rodará em `http://localhost:3000`

### 7. Execute o frontend

Em outro terminal, na pasta `frontend/`:

**Opção 1: Abrir direto no navegador**
```bash
open frontend/index.html
```

**Opção 2: Usar Live Server (VS Code - Recomendado)**
- Instale a extensão Live Server no VS Code
- Clique com botão direito em `index.html` e selecione "Open with Live Server"
- Ou clique em "Go Live" no canto inferior direito

Acesse a aplicação em `http://localhost:5500` (porta padrão do Live Server)

### Verificação de funcionamento

Siga os passos abaixo em **terminais separados**:

1. **Backend está rodando?**
   - Abra um terminal em `backend/` e execute `npm start`
   - Acesse `http://localhost:3000` no navegador
   - Deve aparecer uma mensagem de servidor ativo ou erro 404 (esperado)

2. **Frontend está rodando?**
   - Abra outro terminal em `frontend/`
   - Use o Live Server do VS Code (clique em "Go Live") ou execute:
   ```bash
   npx live-server .
   ```
   - Acesse `http://localhost:5500` no navegador
   - Deve carregar a página do NextAgro

3. **Banco de dados conectado?**
   - No formulário da página, preencha os campos e clique em "Enviar"
   - Abra um terminal e execute:
   ```bash
   mysql -u root -p nextagro
   SELECT * FROM sugestoes;
   ```
   - Os dados do formulário devem aparecer na tabela

4. **Tudo funcionando?**
   - ✓ Frontend carrega em `http://localhost:5500`
   - ✓ Backend responde em `http://localhost:3000`
   - ✓ Formulário envia dados e aparecem no banco de dados

---

## Temas Abordados

- Agronegócio Brasileiro
- Produção de Café
- Produção de Açúcar
- Sustentabilidade
- Agricultura de Precisão
- Tecnologias Agrícolas
- Preservação Ambiental
- Desenvolvimento Sustentável

---

## Objetivo

O NextAgro busca conscientizar estudantes, produtores rurais e a sociedade sobre a importância do agronegócio brasileiro, promovendo conhecimento sobre produção agrícola, inovação tecnológica e sustentabilidade ambiental.

---

## Desenvolvedores

**Caio Lima Viana**

<a href="https://www.linkedin.com/in/caio-lima-viana-004759397/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="https://github.com/caio180" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
</a>

**Murilo Ferreira Stresser**

<a href="https://www.linkedin.com/in/murilo-ferreira-stresser-9328b5384/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="https://github.com/Murilo5660" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
</a>

**André Fernandes dos Santos**

<a href="https://www.linkedin.com/in/andre-fernandes-dos-santos-6791b3326/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="https://github.com/fernandessantosandre-source" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
</a>

---

## Licença

© 2026 NextAgro. Todos os direitos reservados.