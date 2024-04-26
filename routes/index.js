const router = require('express').Router();

router.get('/', (req, res) => { res.send(console.log('Hello Teacher! Add /contacts in the link for the json list of contacts.')); });

router.use('/contacts', require('./contacts'));

module.exports = router;