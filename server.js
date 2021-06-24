const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');
const compression = require('compression');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const app = express();
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Currying callback functions:
app.post('/api/signin', signin.handleSignin(db, bcrypt));
app.post('/api/register', register.handleRegister(db, bcrypt));
app.get('/api/profile/:id', profile.handleProfileGet(db));
app.put('/api/image', image.handleImage(db));
app.post('/api/imageUrl', image.handleApiCall);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
