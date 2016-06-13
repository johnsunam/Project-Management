import issues from './../both/collection';
import label from '../../label/both/collection';
Meteor.methods({
  'addIssues':function(id,title,comment,creator){
issues.insert({projectId:id,title:title,comment:comment,assigned:"",status:true,creator:creator,label:null,lbltxt:"",bgcolor:""});
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
  },
  'tagLabel':function(labelId,issueId,txt,bgcolor){
    issues.update(issueId,{$set:{label:labelId,lbltxt:txt,bgcolor:bgcolor}});
  },
  'updateNumber':function(previous,latest){
    label.update(previous,{$inc:{issuenumber:-1}});
    label.update(latest,{$inc:{issuenumber:1}});

  }

});
