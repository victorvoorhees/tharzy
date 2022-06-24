// IMPORTS
const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config();


// ROUTES
const posts = require('./routes/posts');
const home = require('./routes/home');


// APP
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', home);
app.use('/posts', posts);


// DATABASE
const sequelize = require('./startup/db')

sequelize.authenticate()
    .then(() => console.log('Success!'))
    .catch(err => console.error(err));


app.listen(7000, () => console.log('Listening started blah blah...'))