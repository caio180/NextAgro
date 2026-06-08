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

## Banco de Dados

O sistema utiliza MySQL para armazenar os dados enviados pelos usuários através do formulário de sugestões.

### Exemplo de tabela

```sql
CREATE TABLE sugestoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    melhoria TEXT,
    assuntos TEXT,
    avaliacao VARCHAR(20)
);
```

---

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/caio180/NextAgro.git
```

### 2. Acesse a pasta do projeto

```bash
cd NextAgro
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados MySQL

```sql
CREATE DATABASE IF NOT EXISTS nextagro;
```

### 5. Configure as variáveis de ambiente

Crie um arquivo `.env`:

```env
PORT=x
DB_HOST=x
DB_USER=x
DB_PASSWORD=x
DB_NAME=x
DB_PORT=x
```

### 6. Inicie o servidor

```bash
npm start
```

ou

```bash
node server.js
```

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