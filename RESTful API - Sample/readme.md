# Clients REST API - Sample

A simple REST API created with **Node.js** and **Express**, using a JSON file as a fake database. The API was tested and documented with **Insomnia**.

> Note: This API is for testing purposes only. Changes made with POST, PUT, and DELETE are not saved to the `data.json` file and exist only in memory while the server is running.

---

## Technologies Used

* Node.js
* Express
* JSON as a fake database
* Insomnia for request testing

---

## Project Structure

```
.
├── data.json           # Fake database with client IDs
├── server.js           # API code
├── package.json        # Project dependencies
├── package-lock.json   # Dependency version lock
├── node_modules/       # Folder created by npm with dependencies
└── README.md           # Documentation
```

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <folder-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Access it in the browser or an HTTP client (Insomnia, Postman, etc.):

```
http://localhost:3000
```

---

## Endpoints

### List all clients

```http
GET /clients
```

**Response:**

```json
[
  { "id": "1", "name": "João", "email": "joao@email.com" },
  { "id": "2", "name": "Maria", "email": "maria@email.com" }
]
```

### Get client by ID

```http
GET /clients/:id
```

**Example:**

```
GET /clients/1
```

**Response:**

```json
{ "id": "1", "name": "João", "email": "joao@email.com" }
```

### Create a new client

```http
POST /clients
```

**Body (JSON):**

```json
{
  "name": "New Client",
  "email": "new@email.com"
}
```

**Response:**

```json
{
  "name": "New Client",
  "email": "new@email.com"
}
```

> Note: The client is not actually added to `data.json`, it is only returned in the response.

### Update client by ID

```http
PUT /clients/:id
```

**Example:**

```
PUT /clients/2
```

**Body (JSON):**

```json
{
  "name": "Updated Maria",
  "email": "maria@new.com"
}
```

**Response:**

```json
{ "id": "2", "name": "Updated Maria", "email": "maria@new.com" }
```

> Note: The update is not persisted, it is only returned in the response.

### Delete client by ID

```http
DELETE /clients/:id
```

**Response (filtered clients list):**

```json
[
  { "id": "1", "name": "João", "email": "joao@email.com" }
]
```

> Note: The deletion is not persisted, it is only returned in the response.

---

## Testing with Insomnia

1. Open Insomnia.
2. Create a new collection.
3. Add requests using the endpoints above (GET, POST, PUT, DELETE).
4. Configure the request body in JSON for POST and PUT routes.

---

Author: João Gabriel Duarte -- /joao7duarte
