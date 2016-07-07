const express = require('express'),
  PORT = require('./config').PORT,
  app = express();

app
  .use(express.static('./build'))
  .listen(PORT, () => {
    console.log('server speaking on port '+PORT);
  })
