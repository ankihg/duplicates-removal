const expect = require('chai').expect,
  generateDuplicatesList = require('../lib/generate-duplicates-list'),
  Node = require('../lib/linked-list/node');

describe('generate duplicates list testing', () => {

  it('generates list of 12, at least 3 duplicates', () => {
    let head = generateDuplicatesList(12);
    let cur = head.next;
    const found = {};
    let duplicatesCount = 0;
    let length = 0;
    while (cur) {
      if (found[cur.value]) duplicatesCount++;
      else found[cur.value] = 1;
      cur = cur.next;
      length++;
    }
    expect(length).eql(12);
    expect(duplicatesCount).least(3);
  })


});
