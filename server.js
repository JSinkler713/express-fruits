// Require express
const express = require('express');
const methodOverride = require('method-override');
const app = express()
const bodyParser = require('body-parser')
// Set View Engine (Server rendered templates)
app.set('view engine', 'ejs');



// Fruits Controller
const fruitsController = require('./controllers/fruitsController');

//Middleware body parsers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Middleware method override
app.use(methodOverride('_method'));  

// express.static middleware built into express
app.use(express.static('public'))

//  basic routes
app.get('/', (req, res)=> {
  res.send('<h1>Welcome to express fruit</h1>')
})

// pass off to fruitsController
app.use('/fruits', fruitsController);

app.listen(4000, ()=> console.log('server running on port 4000'));
