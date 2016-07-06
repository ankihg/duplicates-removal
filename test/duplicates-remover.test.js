var expect = require('chai').expect;
var removeDuplicates = require('../lib/remove-duplicates.js')

describe('duplicates remover testing', () => {

  it('remove duplicates of small input size', () => {
    let list = ['plz@respond.com', 'tad@salemtourism.org', 'hilda@squirrels.net', 'tad@salemtourism.org', 'hjalp@mig.com'];
    removeDuplicates(list);
    console.log(list);

  })


})
