const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.listen(PORT, ()=>{
    console.log('App Listening on port ${PORT}!')
});