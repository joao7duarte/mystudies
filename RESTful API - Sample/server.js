const express = require ('express') ;
const data =  require('./data.json');
const app = express();

app.use(express.json());

app.get('/clients', (req, res) => {
  res.json(data);
});

app.get ("/clients/:id", (req, res) => {
  const { id } = req.params
  const client = data.find(cli => cli.id === id)

  if (!client) return res.status(404).json()

  res.json(client)
})

app.post("/clients", (req, res) => {
  const { name, email } = req.body
  res.json({ name, email })
 
  if (!clients) return res.status(404).json()
})

app.put("/clients/:id", (req, res) => {
   const { id } = req.params
  const client = data.find(cli => cli.id === id)

  if (!client) return res.status(404).json()

  res.json(client)
})

app.delete("/clients:id", (req, res) => {
  const { id } = req.params
  const clientsFiltered = data.filter(client =>client.id != id)

  res.json(clientsFiltered)
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
