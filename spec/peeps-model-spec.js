"use strict"

(function testPeepModelCanAccessPeep() {
  var apiCallResponse = [{
    'id':1,
    "body": "Test chitter my first peep",
    "created_at": "Mon  6 Apr 2020 08:44:17 BST",
    "updated_at": "Mon  6 Apr 2020 08:44:17 BST",
    "user":{
      "id":7,
      "handle":"twitterbot242092"
      },
    "likes": [{"user":{"id":7,"handle":"twitterbot242092"}}]
  }]
  var peep = new Peep(apiCallResponse[0])
  assert.isTrue(peep.body() === "Test chitter my first peep")
  console.log("Test: Peep model can access a headline PASSED")
})();
