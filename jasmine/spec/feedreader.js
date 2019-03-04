/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    
    /* First test suite. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    
    describe('RSS Feeds', () => {
        
        /* A test that makes sure the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        for (feed in allFeeds) {
         
        it('has URL', () => {
            feedUrl = document.getElementsByName('url');
            expect(feedUrl).toBeDefined();
            expect(feedUrl).not.toBe(0);
        });
        }
        


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
        for (feed in allFeeds) {
            
        it('has name', () => {
            feedName = document.getElementsByName('name');
            expect(feedName).toBeDefined();
            expect(feedName).not.toBe(0);
        });
        }
    });


    /* Test suite named "The menu" */
    
    describe('The menu', () => {
        
        /* A test that ensures the menu element is
         * hidden by default. 
         */
        
        it('is hidden', () => {
            expect(document.body).toHaveClass('menu-hidden');
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it('menu changes', () => {
            const menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(document.body).not.toHaveClass('menu-hidden');
            menuIcon.click();
            expect(document.body).toHaveClass('menu-hidden');
        });
     });


    /* Test suite named "Initial Entries" */
    
    describe('Initial Entries', () => {
        
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        
        const feedContainer = document.querySelector('.feed .entry');
        
        beforeEach(done => {
            loadFeed(0, done);
        });
    
        it('has at least one entry', done => {
            expect(feedContainer).not.toBe(0);
            done();
        });
    });

    /* Test suite named "New Feed Selection" */
    
    describe('New Feed Selection', () => {
        
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        
        let firstFeed;
        let secondFeed;
        
        beforeEach(done => {
            loadFeed(0, () => {
                firstFeed = $('.feed').html();
                loadFeed(1, () => {
                    secondFeed = $('.feed').html();
                done();
                });
            });
        });

        it('content is changing', done => {
            expect(firstFeed === secondFeed).toBe(false);
            done();
        });
    });
    
}());
