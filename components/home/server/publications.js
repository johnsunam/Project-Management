import member from './../both/collections';

Meteor.publish('getMembers',function(){
  console.log(member.find());
  return member.find();
});
