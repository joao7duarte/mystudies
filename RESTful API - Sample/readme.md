# API REST de Clientes Fictícios

Uma API REST simples criada com Node.js e Express, que utiliza um arquivo JSON como base de dados fictícia. A API foi testada e documentada com o Insomnia.

> Observação: Esta API é apenas para testes. As alterações realizadas com POST, PUT e DELETE não são salvas no arquivo data.json e existem apenas em memória durante a execução do servidor.

---

## Tecnologias usadas

* Node.js
* Express
* JSON como banco de dados fictício
* Insomnia para testes de requisições

---

## Estrutura do projeto

```
.
├── data.json           # Base de dados fictícia com IDs de clientes
├── server.js           # Código da API
├── package.json        # Dependências do projeto
├── package-lock.json   # Bloqueio de versões de dependências
├── node_modules/       # Pasta gerada pelo npm com dependências
└── README.md           # Documentação
```

---

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone <url-do-repo>
   cd <nome-da-pasta>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   node server.js
   ```

4. Acesse no navegador ou cliente HTTP (Insomnia, Postman, etc.):

```
http://localhost:3000
```

---

## Endpoints

### Listar todos os clientes

```http
GET /clients
```

**Resposta:**

```json
[
  { "id": "1", "name": "João", "email": "joao@email.com" },
  { "id": "2", "name": "Maria", "email": "maria@email.com" }
]
```

### Buscar cliente por ID

```http
GET /clients/:id
```

**Exemplo:**

```
GET /clients/1
```

**Resposta:**

```json
{ "id": "1", "name": "João", "email": "joao@email.com" }
```

### Criar novo cliente

```http
POST /clients
```

**Corpo (JSON):**

```json
{
  "name": "Novo Cliente",
  "email": "novo@email.com"
}
```

**Resposta:**

```json
{
  "name": "Novo Cliente",
  "email": "novo@email.com"
}
```

> Observação: O cliente não é realmente adicionado ao data.json, apenas retornado na resposta.

### Atualizar cliente por ID

```http
PUT /clients/:id
```

**Exemplo:**

```
PUT /clients/2
```

**Corpo (JSON):**

```json
{
  "name": "Maria Atualizada",
  "email": "maria@novo.com"
}
```

**Resposta:**

```json
{ "id": "2", "name": "Maria Atualizada", "email": "maria@novo.com" }
```

> Observação: A alteração não é persistida, apenas retornada na resposta.

### Deletar cliente por ID

```http
DELETE /clients/:id
```

**Resposta (lista de clientes filtrada):**

```json
[
  { "id": "1", "name": "João", "email": "joao@email.com" }
]
```

> Observação: A remoção não é persistida, apenas retornada na resposta.

---

## Testando com Insomnia

1. Abra o Insomnia.
2. Crie uma nova coleção.
3. Adicione requisições com os métodos acima (GET, POST, PUT, DELETE).
4. Configure o body em JSON para as rotas POST e PUT.

---

Autor: João Gabriel Duarte -- /joao7duarte
