const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send ('Post');

});

router.get('/specific', (req, res) => {
    res.send ('Specific Posts');

});




module.exports = router;