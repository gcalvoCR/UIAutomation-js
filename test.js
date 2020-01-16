var chai = require('chai');

describe('When Math works', function() { 
  it('should return the result of a sum operation', function() { 
    let sum = 2 + 2; 
    chai.expect(sum,'In case this fails this is the error').to.be.equal(4); 
  });
});