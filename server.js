const express = require('express');
const cors = require('cors'); // Importa o middleware CORS
const app = express();

// Habilita o CORS para todas as origens (você pode customizar isso conforme necessário)
app.use(cors());

// Middleware para parsear o corpo da requisição como JSON
app.use(express.json());

// Rota para receber os dados de autenticação via POST
app.post('/api/auth/signin', (req, res) => {
  const { user, password } = req.body;
  console.log(user, password)
  console.log("user: ", user)
  console.log("senha: ", password)
  res.status(500).json({ message: 'Authentication successful', user });
});


app.listen(3000, () => {
  console.log('Servidor de demonstração rodando na porta 3000');
});
