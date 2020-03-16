const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Personnel = require('../database/models').Personnel;
const bcrypt = require('bcrypt');

// Create a passport middleware to handle user registration
passport.use('signup', new LocalStrategy({
  usernameField: 'phone',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, phone, password, done) => {
  try {
    const { firstName, otherName } = req.body;
    console.log({ firstName, otherName });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Personnel.findOne({ where: { phone } });

    if (user) {
      return done(null, false, { message: 'User already exists' });
    }

    // Save the information provided by the user to the the database
    const createdUser = await Personnel.create({ phone, password: hashedPassword, firstName, otherName });
    // Send the user information to the next middleware
    return done(null, createdUser);
  } catch (error) {
    done(error);
  }
}));

// Create a passport middleware to handle User login
passport.use('login', new LocalStrategy({
  usernameField: 'phone',
  passwordField: 'password'
}, async (phone, password, done) => {
  try {
    // Find the user associated with the email provided by the user
    const user = await Personnel.findOne({ where: { phone } });
    if (!user) {
      // If the user isn't found in the database, return a message
      return done(null, false, { message: 'User not found' });
    }
    // Validate password and make sure it matches with the corresponding hash stored in the database
    // If the passwords match, it returns a value of true.
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return done(null, false, { message: 'Wrong Phone or Password' });
    }
    // Send the user information to the next middleware
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));
