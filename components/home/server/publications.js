import member from './../both/collections';

Meteor.publish('getMembers',function(){

  return Meteor.users.find();
});
