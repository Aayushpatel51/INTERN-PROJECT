const express = require('express');
const router = express.Router();
const userData = require('../models/User')

router.post('/contact', (req, res) => {
    const newUser = new userData({ 
        fullname: req.body.fullname,
        detail: req.body.detail,
        email: req.body.email
    });

    newUser.save()
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        res.json(error);
    })
})

module.exports = router; 