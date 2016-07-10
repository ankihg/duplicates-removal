const expect = require('chai').expect,
  removeDuplicates = require('../lib/remove-duplicates'),
  generateDuplicatesList = require('../lib/generate-duplicates-list'),
  Node = require('../lib/linked-list/node');

describe('duplicates remover testing', () => {

  it('preserves order', () => {
    let head = new Node(null);
    let list = ['plz@respond.com', 'tad@salemtourism.org', 'hilda@squirrels.net', 'hilda@squirrels.net', 'tad@salemtourism.org', 'hjalp@mig.com'];
    head.fromArr(list);

    removeDuplicates(head);

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
      let start = new Date();
      removeDuplicates(head);
      let stop = new Date();
      let time = stop - start;
      expect(time).below(1000);
      console.log(time);
      done();
    })


  })



})
