require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');
const { json } = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const path = require('path');

const strategy = require('./strategy');
const { logout, login, getUser } = require('./controllers/userCtrl');
const {
  addToCart,
  getCart,
  deleteFromCart
} = require('./controllers/cartCtrl');
const { getProducts } = require('./controllers/productCtrl');

const port = process.env.SERVER_PORT || 3001;

const app = express();

// app.use(express.static(__dirname + '/../build'));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.log(err));

// app.use(bodyParser.json());
app.use(json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
  const db = app.get('db');
  db.users
    .get_user_by_authid(user.id)
    .then(response => {
      if (!response[0]) {
        db.users
          .add_user_by_authid([user.displayName, user.id])
          .then(res => done(null, res[0]))
          .catch(err => done(err, null));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => done(err, null));
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/api/products', getProducts);

app.post('/api/cart', addToCart);
// isAuthenticated
app.get('/api/cart', getCart);
app.delete('/api/cart/:id', deleteFromCart);

app.get('/login', login);
app.post('/logout', logout);
app.get('/api/me', getUser);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// function isAuthenticated(req, res, next) {
//   if (!req.user) {
//     res.redirect('http://localhost:3000/#/login');
//   } else {
//     next();
//   }
// }
