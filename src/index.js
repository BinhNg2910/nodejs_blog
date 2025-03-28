const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// route init
// route(app)

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/news', (req, res) => {
  console.log('Query: ', req.query.q);
  res.render('news')
});

app.get('/search', (req, res) => {
  res.render('search')
});

app.post('/search', (req, res) => {
  console.log('Body: ', req.body);
  res.send("");
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})