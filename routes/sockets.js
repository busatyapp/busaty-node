const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Sockets endpoint');
});
app.post('/use', (req, res) => {
  const { eventName, message } = req.body;
  io.sockets.emit(eventName, message);
  res.send('Message sent');
});

module.exports = router;
