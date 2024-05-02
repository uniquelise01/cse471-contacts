const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger-tags=['Hello Message']
    res.send('Hello teacher!'); 
});

router.use('/contacts', require('./contacts'));

module.exports = router;