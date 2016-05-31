import issues from './../both/collection';
Meteor.methods({
  'addIssues':function(id,title,comment){
issues.insert({projectId:id,title:title,comment:comment,assigned:"",status:true});
  },
  'addAssigned':function(id,assigned){
    issues.update(id,{$set:{assigned:assigned}});
  }
});
