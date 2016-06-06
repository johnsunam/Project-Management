import chats from './../both/collection';

Meteor.publish('getChats',function(){
  return chats.find();
});
