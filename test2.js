// required libraries + chai-http as a chai plugin
var chai = require('chai'), 
chaiHttp = require('chai-http'); // for this example we are going to use chai-http to perform http requests
chai.use(chaiHttp); 

// this is the magical data source. we are creating a json list of urls and a expected response code for each
let urls = [
    { 'url' : 'https://www.google.com', 'response_code' : 200},
    { 'url' : 'https://pjcalvo.github.io', 'response_code' : 200},
    { 'url' : 'https://dev.to/error500', 'response_code' : 500},
    { 'url' : 'https://pjcalvo.github.io/notfound/page', 'response_code' : 404}
]

describe('When the links are working as expected', function() {

  urls.forEach(({url, response_code }) => { // foreach is an iterator function that will run thought all the items on urls

    // using ` and $ {} we can simple format the test case name to a meaningful output
    it(`should return '${ response_code }' for request '${ url }'`, function(done) {  // done parameter is required by http-chai to handle the it when the operation is completed

      chai.request(url) // this url comes from urls.foreach element
        .get('/') // just on the 
        .end(function(err, res) {
           // here we will validate that the response call from http-chai will match the url response_code given above
          expect(res,`... instead got ${ res.status}`).to.have.status(response_code);
          done(); // you need this here to tell mocha that the request is completed
        });
    });
  });
});
