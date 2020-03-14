const http = require('http');
const app = require('./app');
const debug = require('debug');
const dotenv = require('dotenv');
const env = require('./config/environment');

dotenv.config();
const logger = debug('log');
const server = http.createServer(app);

server.listen(env.PORT, () => {
  logger(`Find me on http://localhost:${env.PORT}`);
});
