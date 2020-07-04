const express = require('express')

const router = express.Router()

//get looged user 
//api/auth
router.get('/',(req, res) => {
    res.send('get looged user ')
})

//Log in user
//api/auth
router.post('/',(req, res) => {
    res.send('Log in user ')
})
module.exports = router