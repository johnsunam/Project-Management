import chats from './../both/collection';

Meteor.methods({
  'addConversation':function(partnerId){
    var roles=[partnerId,Meteor.userId()]
    chats.insert({roles:roles});
  }
});
