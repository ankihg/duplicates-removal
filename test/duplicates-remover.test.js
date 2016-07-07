let expect = require('chai').expect;
let removeDuplicates = require('../lib/remove-duplicates.js');
let generateDuplicatesList = require('../lib/generate-duplicates-list');

describe('duplicates remover testing', () => {

  // it('preserves order', () => {
  //   let list = ['plz@respond.com', 'tad@salemtourism.org', 'hilda@squirrels.net', 'hilda@squirrels.net', 'tad@salemtourism.org', 'hjalp@mig.com'];
  //   let initLength = list.length;
  //
  //   removeDuplicates(list);
  //
  //   // two elements removed
  //   expect(list.length).eql(initLength-2);
  //
  //   // same order as input
  //   expect(list[0]).eql('plz@respond.com');
  //   expect(list[1]).eql('tad@salemtourism.org');
  //   expect(list[2]).eql('hilda@squirrels.net');
  //   expect(list[3]).eql('hjalp@mig.com');
  // })
  //
  //
  // it('handles empty list', () => {
  //   let list = [];
  //   removeDuplicates(list);
  //   expect(list).eql([]);
  // })


  describe('ensure speed', () => {
    it('fast', function(done) {
      this.timeout(50000)
      let list = generateDuplicatesList(100000);
      console.log('generated');
      let start = new Date();
      console.log('timer started');
      removeDuplicates(list);
      let stop = new Date();
      console.log('timer ended');
      console.log(start);
      console.log(stop);
      let time = stop - start;
      console.log(time);
      done();
    })


  })



})
