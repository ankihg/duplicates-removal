let expect = require('chai').expect;
let removeDuplicates = require('../lib/remove-duplicates');
let generateDuplicatesList = require('../lib/generate-duplicates-list');
let Node = require('../lib/linked-list/node')

describe('duplicates remover testing', () => {

  it('preserves order', () => {
    let head = new Node(null);
    let list = ['plz@respond.com', 'tad@salemtourism.org', 'hilda@squirrels.net', 'hilda@squirrels.net', 'tad@salemtourism.org', 'hjalp@mig.com'];
    head.fromArr(list);
    console.log(head.toArr());

    removeDuplicates(head);
    console.log(head.toArr());

    // same order as input
    expect(head.next.value).eql('plz@respond.com');
    expect(head.next.next.value).eql('tad@salemtourism.org');
    expect(head.next.next.next.value).eql('hilda@squirrels.net');
    expect(head.next.next.next.next.value).eql('hjalp@mig.com');
    expect(head.next.next.next.next.next).eql(null);
  })


  it('handles empty list', () => {
    let list = new Node(null);
    removeDuplicates(list);
    expect(list).eql(new Node(null));
  })


  describe('ensure speed', () => {
    it('fast', function(done) {
      this.timeout(50000)
      let head = generateDuplicatesList(100000);
      console.log(head);
      console.log('generated');
      let start = new Date();
      console.log('timer started');
      removeDuplicates(head);
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
