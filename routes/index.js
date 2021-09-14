const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

//@desc    Login/Landing Page
//@route   GET/
router.get('/', function (req, res, next) {
    res.render('login')
})

//@desc    Dashboard
//@route   GET/ dashboard 
router.get('/dashboard', (req, res, next ) => {
    res.render('dashboard')
})

module.exports = router