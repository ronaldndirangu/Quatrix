const jwt = require('jsonwebtoken');
const passport = require('passport');

const JWT_EXPIRE_IN = '24h';

module.exports = {
  signUp: (req, res, next) => {
    passport.authenticate('signup', { session: false }, (err, user, info) => {
      if (err) {
        return res.status(400).send({ message: err.message });
      }
      if (info !== undefined) {
        return res.status(403).send({ message: info.message });
      } else {
        return res.status(200).json({
          message: 'User signed up',
          user
        });
      }
    })(req, res, next);
  },
  login: (req, res, next) => {
    passport.authenticate('login', { session: false }, (err, user, info) => {
      if (err) {
        return res.status(400).send({ message: err.message });
      }
      if (info !== undefined) {
        return res.status(403).send({ message: info.message });
      } else {
        const { id, phone } = user;
        const accessToken = jwt.sign({ id, phone }, process.env.SECRET_KEY, { expiresIn: JWT_EXPIRE_IN });
        return res.status(200).send({
          accessToken,
          expires_in: JWT_EXPIRE_IN
        });
      }
    })(req, res, next);
  }
};
