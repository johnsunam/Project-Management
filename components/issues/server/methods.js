import issues from './../both/collection';
Meteor.methods({
  'addIssues':function(id,title,comment,creator){
issues.insert({projectId:id,title:title,comment:comment,assigned:"",status:true,creator:creator});
  },
  'addAssigned':function(id,assigned,formermember){
if(formermember){
    var user=Meteor.users.find({_id:formermember}).fetch();
    Meteor.users.update(formermember,{$pull:{assignedIssues:{id:id}}});

}
  Meteor.users.update(assigned,{$push:{assignedIssues:{id:id}}});
    issues.update(id,{$set:{assigned:assigned}});
  },
  'updateStatus':function(id,status)
  {
    issues.update(id,{$set:{status:status}});
  },
  'deleteIssue':function(id){
    issues.remove(id);
  }

});
