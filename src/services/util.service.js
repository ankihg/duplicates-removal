module.exports = function(app) {
  app.factory('UtilService', [function() {

    this.generateDuplicates = require(__dirname+'/../../lib/generate-duplicates-list');
    this.removeDuplicates = require(__dirname+'/../../lib/remove-duplicates');
    // this.linkedListNode = require(__dirname+'/../../lib/linked-list/node');

    return this;

  }]);
}
