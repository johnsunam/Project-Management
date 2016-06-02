import discussion from './../both/collection';
Meteor.publish('getdiscussion',function(content,projectId){
  return discussion.find();
});
