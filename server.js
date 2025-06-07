const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simulate delay to test observability
app.use((req, res, next) => {
  const delay = Math.random() * 2000; // up to 2 seconds delay
  setTimeout(next, delay);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/health', (req, res) => {
  res.json({ status: "OK", uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Contoso Client Site running on port ${port}`);
});
