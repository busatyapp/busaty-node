const express = require('express');
const router = express.Router();
const io = socketIo(server);

router.get('/', (req, res) => {
  res.send('Sockets endpoint');
});
router.post('/use', (req, res) => {
  const { eventName, message } = req.body;
  io.sockets.emit(eventName, message);
  res.send('Message sent');
});

module.exports = router;
