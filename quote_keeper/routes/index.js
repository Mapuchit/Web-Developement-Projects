const express = require('express');
const router = express.Router();

// code for handling the data POST

// we don’t have a database set up yet,
// so we respond with the submitted quote to the user

router.post('/', (req, res) => {

    // capture the submitted data by destructuring req.body
    const {source, attributed, quote} = req.body;
    // render the handlebars template with this data (in the #quotes section)
    res.render('index', {source, attributed, quote});

});


// a handler for a GET of '/' to render the handlebars index template
// this is used by the feature test and server test aswell
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;