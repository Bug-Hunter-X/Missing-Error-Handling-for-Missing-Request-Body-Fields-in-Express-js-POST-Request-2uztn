const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const user = { name, email };
  console.log(user);
  res.status(201).send(user);
});
app.listen(3000, () => console.log('Server is running on port 3000'));