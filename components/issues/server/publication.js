Meteor.publish('getIssues',function(){

  return issues.find();
});
