import member from './../both/collections';

Meteor.publish('getProjects',function(){
  return projects.find();
});
