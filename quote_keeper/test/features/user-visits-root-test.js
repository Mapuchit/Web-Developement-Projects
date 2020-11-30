const {assert} = require('chai');

// test behavior that happens when a user visits our project root, which will be the homepage of our website
describe('User visits root', () => {

    // what feature we are testing
    describe('posting a quote', () => {

        // the desired behavior of the feature you are testing
        it('saves quote and metadata submitted by user', () => {

            // Setup
            const quote = 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.';
            const attributed = 'Marianne Williamson';
            const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles';
            
            // Exercise
            // set the url of our test browser to the root of our project
            browser.url('/');
            // fill in the contents of the quote in the test browser
            browser.setValue('textarea[id=quote]', quote);
            browser.setValue('input[id=attributed]', attributed);
            browser.setValue('input[id=source]', source);
            // call click to mimic clicking on a submit button
            browser.click('input[type=submit]');

            // Verify
            // that the quote has been displayed in the test browser
            assert.include(browser.getText('#quote'), quote);
            assert.include(browser.getText('#attributed'), attributed);
            assert.include(browser.getText('#source'), source);

        });

    });

});
