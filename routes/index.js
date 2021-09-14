 const express = require('express')
 const router = express.Router()

 // middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

 //@desc    Login/Landing Page
 //@route   GET/
 router.get('/', function (req, res) {
     res.send('login')
})

  //@desc    Dashboard
  //@route   GET/ dashboard 
 router.get('/dashboard', function (req, res) {
    res.render('dashboard')
})

 module.exports = router