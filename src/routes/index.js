const authRouter = require('./authRouter');
const tasksController = require('./tasksRouter');

module.exports = (app) => {
  app.use(authRouter);
  app.use(tasksController);
};
