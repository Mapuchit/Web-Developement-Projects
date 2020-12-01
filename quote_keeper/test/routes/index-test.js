// a server level test
const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

// helper function to parse text from HTML element
const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
};


// on the home page
describe('/', () => {

    // to test the post request 
    describe('POST', () => {

        // we need an async function to make server requests
        it('creates a new quote', async () => {

            // Setup
            const quote = 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.';
            const attributed = 'Marianne Williamson';
            const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles';

            // Exercise
            // make a POST request to '/', submitting these variables
            // include .type('form') to submit the data as a form
            const response = await request(app)
                .post('/')
                .type('form')
                .send({quote, attributed, source});
            
            // Verify
            // check the status code is 200 
            assert.equal(response.status, 200);
            // and that the response contains the text of our quote, the attribution and the source
            assert.include(parseTextFromHTML(response.text, '#quotes'), quote);
            assert.include(parseTextFromHTML(response.text, '#quotes'), attributed);
            assert.include(parseTextFromHTML(response.text, '#quotes'), source);


        });

    });

});