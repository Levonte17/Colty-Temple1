//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//INIT
const app = express();

//CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;
const db = mongoose.connection;

//CONNECT MONGODB
mongoose.connect(DATABASE_URI);

//MONGOOSE LISTENER
db.on('connected', () => console.log('MongoDB Connected'));

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//TODU
////INDUCES////

//HomePage//
app.get('/',(req, res) => {
res.render('index.ejs');
});

//PayerRequest//
app.get('/prayer', (req,res) => {
res.render('prayer.ejs');
});

//Hours//
app.get('/service', (req, res) => {
res.render('service.ejs');
});

//Events//
app.get('/event', (req, res) => {
res.render('event.ejs');
});

//Community//
app.get('/community', (req, res) => {
res.render('community.ejs');
});
//Contact//
app.get('/Contact', (req, res) => {
res.render('contact.ejs');
});



//LISTENER
app.listen(PORT, () => {
    console.log(`App Is Listening On Port ${PORT}`);
});