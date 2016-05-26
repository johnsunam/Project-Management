import member from './../both/collections';

Meteor.publish('getMembers',function(){
  console.log(projects.find());
  return projects.find();
});
