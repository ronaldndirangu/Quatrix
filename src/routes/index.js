const authRouter = require('./authRouter');

const apiPrefix = '/api/v1';

module.exports = (app) => {
  app.use(apiPrefix, authRouter);
};
