import member from './../both/collections';

Meteor.publish('getProjects',function(){
  console.log(projects.find());
  return projects.find();
});
