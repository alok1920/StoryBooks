const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

//Load config
dotenv.config({ path:'./config/config.env' })

connectDB()

const app = express()  //Initialize the app

const PORT = process.env.PORT || 3000

//can see logs on terminal in development mode using MORGAN
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//HandleBars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Routes
app.use('/', require('./routes/index'))

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`)
 )  // connect to the port