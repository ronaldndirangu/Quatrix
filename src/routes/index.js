const passport = require('passport');
const authRouter = require('./authRouter');
const tasksController = require('./tasksRouter');

module.exports = (app) => {
  app.use(authRouter);
  app.use(passport.authenticate('jwt', { session: false }), tasksController);
};
